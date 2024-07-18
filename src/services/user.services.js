const { User } = require("../models");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config");
const { jwtSecret } = config;
const { generateToken } = require("../utils/auth");
const { sendMail } = require("../utils/email");
const { getUserById } = require("../utils/user");
const { getUserByEmail } = require("../utils/user");
const { getUserByUsername } = require("../utils/user");

exports.signup = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { name, email, username, password } = req.body;
  try {
    const user = await User.create({
      name,
      email,
      username,
      password: bcrypt.hashSync(password, 10),
    });
    const token = generateToken(user);
    sendMail(user.email, "welcome", `Welcome to ${config.appName}!`);
    return res.status(201).json({
      user,
      token,
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;
  try {
    const user = await getUserByEmail(email);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid Credentials" });
    }
    const token = generateToken(user);
    return res.status(200).json({
      user,
      token,
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
