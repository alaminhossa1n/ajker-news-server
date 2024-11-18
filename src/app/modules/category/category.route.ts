import express from "express";
import { categoryController } from "./category.controller";
import auth from "../../middlewares/auth";

const router = express.Router();

router.post("/create", auth("admin"), categoryController.createCategory);
router.get("/categories", categoryController.getCategories);
router.patch("/update/:id", auth("admin"), categoryController.updateCategory);

export const categoryRoute = router;
