require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "dangmanh2001",
    database: process.env.DB_NAME || "web_tan_thinh",
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: "mysql",
  },
  test: {
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || null,
    database: process.env.DB_TEST || "database_test",
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || null,
    database: process.env.DB_PROD || "database_production",
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: "mysql",
  },
};
