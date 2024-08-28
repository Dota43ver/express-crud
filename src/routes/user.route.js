import { Router } from "express";
import { UserController } from "../controllers/user.controller.js";

const router = Router();

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.get("/test", (req, res) => {
  res.json({ msg: "test" });
});

export default router;
