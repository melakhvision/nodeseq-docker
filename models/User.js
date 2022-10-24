const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db.config.js");

const User = sequelize.define("User", {
  firstName: {
    type: "VARCHAR(50)",
  },
  lastName: {
    type: "VARCHAR(50)",
    // allowNull defaults to true
  },
});

module.exports = User;
