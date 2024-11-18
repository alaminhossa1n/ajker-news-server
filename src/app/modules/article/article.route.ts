import express from "express";
import { articleController } from "./article.controller";
import auth from "../../middlewares/auth";

const router = express.Router();

//create
router.post(
  "/create",
  auth("admin", "editor"),
  articleController.createArticle
);
router.get("/articles", articleController.getAllArticles); //get all articles

//update articles
router.patch(
  "/update/:id",
  auth("admin", "editor"),
  articleController.updateArticle
);
router.get("/breaking", articleController.getBreakings); //get breakings
router.get("/featured", articleController.getFeatured); //get featured
router.get("/tending", articleController.getTending); //get tending

export const articleRoute = router;
