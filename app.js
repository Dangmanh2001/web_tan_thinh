require("dotenv").config();
const express = require("express");
var createError = require("http-errors");
const expressLayouts = require("express-ejs-layouts");

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
app.use(express.static(path.join(__dirname, "src", "public")));

homeRouter = require("./src/routes/home");

app.use(express.json());
console.log(path.join(__dirname, "views"));
// test route
app.use("/", homeRouter);

const PORT = process.env.PORT || 3100;
app.listen(PORT, () => {
  console.log(`Server chạy tại http://localhost:${PORT}`);
});
