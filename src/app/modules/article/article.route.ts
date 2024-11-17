import express from "express";
import { articleController } from "./article.controller";

const router = express.Router();

router.post("/create", articleController.createArticle);
router.get("/articles", articleController.getAllArticles);
router.patch("/update/:id", articleController.updateArticle);

export const articleRoute = router;
