const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db.config.js");
const usersRoutes = require("./routes/users.js");
// const swaggerUi = require("swagger-ui-express");
// const swaggerJsdoc = require("swagger-jsdoc");
const User = require("./models/User.js");

const corsOption = {
  origin: "*",
};

// const options = {
//   definition: {
//     openapi: "3.0.0",
//     info: {
//       title: "User Management API",
//       version: "1.0.0",
//       description: "A simple Express Library API",
//     },
//     servers: [
//       {
//         url: "http://localhost:3000/api",
//       },
//     ],
//   },
//   apis: ["./routes/*.js"],
// };

// const specs = swaggerJsdoc(options);
const app = express();

app.use(cors(corsOption));
app.use(express.json());
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
app.use("/user", usersRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    await User.sync();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
  console.log(`Server is running on port ${PORT}.`);
});
