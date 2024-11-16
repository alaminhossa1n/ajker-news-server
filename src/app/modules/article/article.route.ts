import express from "express";
import { articleController } from "./article.controller";

const router = express.Router();

router.post("/create", articleController.createArticle);

export const articleRoute = router;
