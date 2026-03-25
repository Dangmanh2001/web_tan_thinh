var express = require("express");
const authController = require("../controllers/auth.controller");
const { isGuest } = require("../middlewares/auth.middleware");

var router = express.Router();

router.get("/", isGuest, authController.login);
router.post("/login", isGuest, authController.postLogin);
router.get("/logout", authController.logout);
router.get("/forgotPass", isGuest, authController.forgotPass);

module.exports = router;
