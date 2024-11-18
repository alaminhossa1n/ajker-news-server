import express from "express";
import { userController } from "./user.controller";
import auth from "../../middlewares/auth";

const router = express.Router();

router.post("/create", auth("admin"), userController.createUser);
router.get("/users", auth("admin"), userController.getAllUsers);
router.post("/login", userController.loginUser);
router.post("/change-password", userController.changePassword);
router.post("/login", userController.loginUser);
router.patch("/update/:id", userController.updateUser);

export const userRoutes = router;
