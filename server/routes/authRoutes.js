import { Router } from "express";
import {
  login,
  logout,
  callback,
  getUser,
} from "../controllers/authController.js";

const router = Router();

router.get("/login", login);

router.post("/logout", logout);

router.get("/callback", ...callback);

router.get("/user", getUser);

export default router;
