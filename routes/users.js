// import express from "express";
const express = require("express");
// import sequelize from "../config/db.config.js";
const User = require("../models/User.js");
// import User from "../models/User.js";

const router = express.Router();

router.get("/allusers", async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users).status(200);
  } catch (error) {
    res.json({ message: error.message }).status(404);
  }
});

router.post("/", async (req, res) => {
  const data = { firstName: req.body.firstName, lastName: req.body.lastName };
  const user = await User.create(data);
  try {
    await user.save();
    res.json(user).status(201);
  } catch (error) {
    res.json({ message: error.message }).status(404);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.params.id } });
    user == null
      ? res.json({ message: "No user has been found" }).status(404)
      : res.json(user);
  } catch (error) {
    res.json({ message: error.message }).status(500);
  }
});

module.exports = router;
