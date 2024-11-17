import express from "express";
import { articleController } from "./article.controller";

const router = express.Router();

router.post("/create", articleController.createArticle); //create
router.get("/articles", articleController.getAllArticles); //get all articles
router.patch("/update/:id", articleController.updateArticle); //update articles
router.get("/breaking", articleController.getBreakings); //get breakings
router.get("/featured", articleController.getFeatured); //get featured
router.get("/tending", articleController.getTending); //get tending

export const articleRoute = router;
