import { User } from "../models/user.entity.js";

const register = async (req, res) => {
  try {
    console.log(re.body);
    const { username, password } = req.body;
    return res.json({ ok: true, msg: "register good" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error server" });
  }
};

const login = async (req, res) => {
  try {
    console.log(re.body);
    const { username, password } = req.body;
    return res.json({ ok: true, msg: "Logged in" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error server" });
  }
};

const test = async (req, res) => {
  try {
    console.log(re.body);
    const { username, password } = req.body;
    return res.json({ ok: true, msg: "Logged in" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error server" });
  }
};

export const UserController = {
  register,
};
