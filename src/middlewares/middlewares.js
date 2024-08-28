import { check } from "express-validator";
import { validationResult } from "express-validator";

export const validateRegister = [
  check("username", "Username is required").not().isEmpty(),
  check("password", "Password is required").not().isEmpty(),
];

export const validateLogin = [
  check("username", "Username is required").not().isEmpty(),
  check("password", "Password is required").not().isEmpty(),
];

export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
