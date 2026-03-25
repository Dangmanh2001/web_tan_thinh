require("dotenv").config();
const express = require("express");
var createError = require("http-errors");
const expressLayouts = require("express-ejs-layouts");
const session = require("express-session");

var cookieParser = require("cookie-parser");
var logger = require("morgan");
const app = express();
const path = require("path");
app.use(expressLayouts);
// set view engine
app.set("views", path.join(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  session({
    secret: process.env.SESSION_SECRET || "secret_key_thay_bang_env",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 8 }, // 8 tiếng
  }),
);
app.use(express.static(path.join(__dirname, "src", "public")));

const homeRouter = require("./src/routes/home");
const authRouter = require("./src/routes/auth");
const adminRouter = require("./src/routes/admin");

app.use(express.json());
console.log(path.join(__dirname, "views"));
// test route
app.use("/", homeRouter);
app.use("/auth", authRouter);
app.use("/dashboard", adminRouter);

// 404 - phải đặt sau tất cả routes
app.use((req, res) => {
  res.status(404).render("pages/404", { layout: false });
});

const PORT = process.env.PORT || 3300;
app.listen(PORT);
