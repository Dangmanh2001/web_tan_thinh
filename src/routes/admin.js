var express = require("express");
const adminController = require("../controllers/admin/admin.controller");
const contactController = require("../controllers/admin/contact.controller");
const newsController = require("../controllers/admin/news.controller");
const portfolioController = require("../controllers/admin/portfolio.controller");
const serviceController = require("../controllers/admin/service.controller");
const categoryController = require("../controllers/admin/category.controller");
const documentController = require("../controllers/admin/document.controller");
const searchController = require("../controllers/admin/search.controller");
const { isAdminOrEditor, isAdmin } = require("../middlewares/auth.middleware");
const userController = require("../controllers/admin/user.controller");

var router = express.Router();

// Tất cả routes trong dashboard đều cần đăng nhập
router.use(isAdminOrEditor);

// Đưa thông tin user vào res.locals để dùng trong tất cả views
router.use((req, res, next) => {
  res.locals.user = req.session.user;
  next();
});

router.get("/", adminController.dashboard);
router.get("/search", searchController.search);
router.get("/contact", contactController.contact);
router.post("/contact/delete/:id", contactController.delete);
router.get("/news", newsController.list);
router.get("/news/create", newsController.createForm);
router.post("/news/create", newsController.upload, newsController.create);
router.get("/news/edit/:id", newsController.editForm);
router.post("/news/edit/:id", newsController.upload, newsController.edit);
router.post("/news/delete/:id", newsController.delete);
router.get("/category", categoryController.list);
router.post("/category/create", categoryController.create);
router.post("/category/edit/:id", categoryController.edit);
router.post("/category/delete/:id", categoryController.delete);

router.get("/portfolio", portfolioController.list);
router.get("/portfolio/create", portfolioController.createForm);
router.post("/portfolio/create", portfolioController.upload, portfolioController.create);
router.get("/portfolio/edit/:id", portfolioController.editForm);
router.post("/portfolio/edit/:id", portfolioController.upload, portfolioController.edit);
router.post("/portfolio/delete/:id", portfolioController.delete);
router.get("/service", serviceController.list);
router.get("/service/create", serviceController.createForm);
router.post("/service/create", serviceController.upload, serviceController.create);
router.get("/service/edit/:id", serviceController.editForm);
router.post("/service/edit/:id", serviceController.upload, serviceController.edit);
router.post("/service/delete/:id", serviceController.delete);

router.get("/document", documentController.list);
router.get("/document/create", documentController.createForm);
router.post("/document/create", documentController.upload, documentController.create);
router.get("/document/edit/:id", documentController.editForm);
router.post("/document/edit/:id", documentController.upload, documentController.edit);
router.post("/document/delete/:id", documentController.delete);

// User management - chỉ admin
router.get("/users", isAdmin, userController.list);
router.get("/users/create", isAdmin, userController.createForm);
router.post("/users/create", isAdmin, userController.create);
router.get("/users/edit/:id", isAdmin, userController.editForm);
router.post("/users/edit/:id", isAdmin, userController.edit);
router.post("/users/delete/:id", isAdmin, userController.delete);

module.exports = router;
