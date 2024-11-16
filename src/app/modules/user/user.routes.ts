import express from "express";
import { userController } from "./user.controller";

const router = express.Router();

router.post("/create-user", userController.createUser);
router.post("/login", userController.loginUser);
router.post("/change-password", userController.changePassword);

export const userRoutes = router;
