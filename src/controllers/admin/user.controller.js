const bcrypt = require("bcryptjs");
const models = require("../../../models/index");
const User = models.User;

module.exports = {
  list: async (req, res) => {
    try {
      const users = await User.findAll({ order: [["created_at", "DESC"]] });
      res.render("pages/admin/user", {
        layout: "layouts/admin/home",
        users,
        success: req.query.success || null,
      });
    } catch (error) {
      console.error(error);
      res.render("pages/admin/user", {
        layout: "layouts/admin/home",
        users: [],
        success: null,
      });
    }
  },

  createForm: (req, res) => {
    res.render("pages/admin/user-form", {
      layout: "layouts/admin/home",
      editUser: null,
      error: null,
    });
  },

  create: async (req, res) => {
    const { username, password, role } = req.body;
    try {
      const exists = await User.findOne({ where: { username } });
      if (exists) {
        return res.render("pages/admin/user-form", {
          layout: "layouts/admin/home",
          editUser: null,
          error: "Tên đăng nhập đã tồn tại",
        });
      }
      const hashed = await bcrypt.hash(password, 10);
      await User.create({ username, password: hashed, role });
      res.redirect("/dashboard/users?success=created");
    } catch (error) {
      console.error(error);
      res.render("pages/admin/user-form", {
        layout: "layouts/admin/home",
        editUser: null,
        error: "Đã có lỗi xảy ra",
      });
    }
  },

  editForm: async (req, res) => {
    try {
      const editUser = await User.findByPk(req.params.id);
      if (!editUser) return res.redirect("/dashboard/users");
      res.render("pages/admin/user-form", {
        layout: "layouts/admin/home",
        editUser,
        error: null,
      });
    } catch (error) {
      console.error(error);
      res.redirect("/dashboard/users");
    }
  },

  edit: async (req, res) => {
    const { username, password, role } = req.body;
    try {
      const updateData = { username, role };
      if (password && password.trim() !== "") {
        updateData.password = await bcrypt.hash(password, 10);
      }
      await User.update(updateData, { where: { id: req.params.id } });
      res.redirect("/dashboard/users?success=updated");
    } catch (error) {
      console.error(error);
      const editUser = await User.findByPk(req.params.id);
      res.render("pages/admin/user-form", {
        layout: "layouts/admin/home",
        editUser,
        error: "Đã có lỗi xảy ra",
      });
    }
  },

  delete: async (req, res) => {
    try {
      // Không cho xóa chính mình
      if (parseInt(req.params.id) === req.session.user.id) {
        return res.redirect("/dashboard/users?success=self_delete_blocked");
      }
      await User.destroy({ where: { id: req.params.id } });
      res.redirect("/dashboard/users?success=deleted");
    } catch (error) {
      console.error(error);
      res.redirect("/dashboard/users");
    }
  },
};
