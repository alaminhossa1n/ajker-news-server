import { NextFunction, Request, Response } from "express";
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

export const articleController = {
  createArticle,
};
