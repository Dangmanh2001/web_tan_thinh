var express = require("express");
const homeController = require("../controllers/home/home.controller");
const serviceController = require("../controllers/home/service.controller");
const portfolioController = require("../controllers/home/portfolio.controller");
const aboutController = require("../controllers/home/about.controller");
const contactController = require("../controllers/home/contact.controller");
const newsController = require("../controllers/home/news.controller");
const documentController = require("../controllers/home/document.controller");
var router = express.Router();

router.get("/", homeController.home);

router.get("/service", serviceController.service);
router.get("/services/:id", serviceController.detail);

router.get("/portfolio", portfolioController.portfolio);
router.get("/portfolio/:id", portfolioController.detail);

router.get("/news", newsController.news);
router.get("/news/:id", newsController.detail);

router.get("/about", aboutController.about);

router.get("/contact", contactController.contact);
router.post("/contact", contactController.handleContact);

router.get("/cong-bo-nang-luc", documentController.index);

module.exports = router;
