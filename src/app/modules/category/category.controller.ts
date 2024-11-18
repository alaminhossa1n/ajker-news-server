import { NextFunction, Request, Response } from "express";
import { categoryService } from "./category.service";

const createCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await categoryService.createCategory(req.body);
    res.status(201).json({
      success: true,
      statusCode: 201,
      message: "Category created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getCategories = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await categoryService.getCategory();
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Category retrieved successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const updateCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const updatedDoc = req.body;

    const result = await categoryService.updateCategory(id, updatedDoc);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Category Updated successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const categoryController = {
  createCategory,
  getCategories,
  updateCategory,
};
