const models = require("../../models/index");
const Contact = models.Contact;
module.exports = {
  contact: async (req, res) => {
    res.render("pages/home/contact", {
      title: "Liên hệ",
      layout: "layouts/home/home",
    });
  },
  handleContact: async (req, res) => {
    try {
      const { name, email, phone, message } = req.body;

      // Lưu dữ liệu vào bảng Contact (id, name, email, phone, message, created_at)
      await Contact.create({ name, email, phone, message });

      // Điều hướng về trang chủ và thêm dấu hiệu thành công
      return res.redirect("/contact?success=true#contact");
      // Thêm #contact để trình duyệt tự cuộn xuống khu vực Form sau khi load lại
    } catch (error) {
      console.error("Lỗi:", error);
      return res.redirect("/contact?success=false#contact");
    }
  },
};
