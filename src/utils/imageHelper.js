const fs = require("fs");
const path = require("path");
const { Op } = require("sequelize");
const models = require("../../models/index");

// Tất cả các bảng + cột có lưu đường dẫn ảnh
const IMAGE_FIELDS = [
  { model: "Service",      field: "thumbnail" },
  { model: "Post",         field: "thumbnail" },
  { model: "Project",      field: "thumbnail" },
  { model: "ProjectImage", field: "image"     },
];

/**
 * Đếm số bản ghi đang dùng imagePath,
 * loại trừ bản ghi hiện tại (excludeModel + excludeId).
 */
async function countUsages(imagePath, excludeModel, excludeId) {
  if (!imagePath) return 0;

  let total = 0;
  for (const { model: modelName, field } of IMAGE_FIELDS) {
    const M = models[modelName];
    if (!M) continue;

    const where = { [field]: imagePath };

    // Loại trừ bản ghi đang xử lý
    if (modelName === excludeModel && excludeId) {
      where.id = { [Op.ne]: excludeId };
    }

    const count = await M.count({ where });
    total += count;
  }
  return total;
}

/**
 * Xóa file vật lý nếu ảnh không còn được dùng ở nơi nào khác.
 * @param {string} imagePath  - đường dẫn lưu trong DB, vd: "/images/16xxx.jpg"
 * @param {string} excludeModel - tên model đang xử lý, vd: "Post"
 * @param {number} excludeId    - id bản ghi đang xử lý
 * @returns {boolean} true nếu đã xóa file, false nếu còn dùng ở nơi khác
 */
async function deleteIfUnused(imagePath, excludeModel, excludeId) {
  if (!imagePath) return false;

  const usages = await countUsages(imagePath, excludeModel, excludeId);
  if (usages > 0) return false; // vẫn đang dùng → không xóa

  // Tính đường dẫn tuyệt đối
  const absPath = path.join(__dirname, "../public", imagePath);
  if (fs.existsSync(absPath)) {
    fs.unlinkSync(absPath);
    return true;
  }
  return false;
}

/**
 * Xử lý khi cập nhật ảnh (edit):
 * - Nếu có ảnh mới upload: kiểm tra ảnh cũ, xóa nếu không còn dùng.
 * - Nếu không có ảnh mới: giữ nguyên ảnh cũ.
 * @returns {string|null} đường dẫn ảnh để lưu vào DB (null = giữ nguyên)
 */
async function handleUpdate(newFile, oldImagePath, modelName, recordId) {
  if (!newFile) return null; // không có ảnh mới → không thay đổi

  const newImagePath = "/images/" + newFile.filename;

  // Xóa ảnh cũ nếu khác ảnh mới và không dùng ở nơi khác
  if (oldImagePath && oldImagePath !== newImagePath) {
    await deleteIfUnused(oldImagePath, modelName, recordId);
  }

  return newImagePath;
}

/**
 * Xử lý khi xóa bản ghi:
 * - Chỉ xóa file nếu ảnh không còn dùng ở bản ghi nào khác.
 */
async function handleDelete(imagePath, modelName, recordId) {
  return await deleteIfUnused(imagePath, modelName, recordId);
}

module.exports = { countUsages, deleteIfUnused, handleUpdate, handleDelete };
