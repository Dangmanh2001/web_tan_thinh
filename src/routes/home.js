var express = require("express");
const homeController = require("../controllers/home.controller");
const serviceController = require("../controllers/service.controller");
const portfolioController = require("../controllers/portfolio.controller");
const aboutController = require("../controllers/about.controller");
const contactController = require("../controllers/contact.controller");
const newsController = require("../controllers/news.controller");
var router = express.Router();

/* GET home page. */
router.get("/", homeController.home);

router.get("/service", serviceController.service);

router.get("/portfolio", portfolioController.portfolio);

router.get("/news", newsController.news);

router.get("/about", aboutController.about);

router.get("/contact", contactController.contact);
router.post("/contact", contactController.handleContact);

module.exports = router;
