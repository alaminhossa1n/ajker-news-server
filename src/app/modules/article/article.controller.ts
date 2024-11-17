import { NextFunction, query, Request, Response } from "express";
import { articleService } from "./article.service";

const createArticle = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await articleService.createArticle(req.body);
    res.status(201).json({
      success: true,
      statusCode: 201,
      message: "Article created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// get articles
const getAllArticles = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await articleService.getAllArticles();
    res.status(200).json({
      success: true,
      statusCode: 201,
      message: "Articles retrieved successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

//update article
const updateArticle = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const updatedDoc = req.body;
    const result = await articleService.updateArticle(id, updatedDoc);
    res.status(200).json({
      success: true,
      statusCode: 201,
      message: "Articles updated successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const articleController = {
  createArticle,
  getAllArticles,
  updateArticle,
};
