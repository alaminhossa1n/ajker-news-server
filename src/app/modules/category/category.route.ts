import express from "express";
import { categoryController } from "./category.controller";

const router = express.Router();

router.post("/create", categoryController.createCategory);
router.get("/categories", categoryController.getCategories);

export const categoryRoute = router;
