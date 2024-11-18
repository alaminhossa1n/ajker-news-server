import { isValidObjectId } from "mongoose";
import categoryModel from "./category.model";
import AppError from "../../errors/AppError";

const createCategory = async (payload: { name: string }) => {
  const res = await categoryModel.create(payload);
  return res;
};

const getCategory = async () => {
  const res = await categoryModel.find();
  return res;
};

const updateCategory = async (id: string, updatedDoc: { name: string }) => {
  const isValidId = isValidObjectId(id);
  if (!isValidId) {
    throw new AppError(406, "Invalid ObjectId");
  }

  const isCategoryExist = await categoryModel.findById(id);
  if (!isCategoryExist) {
    throw new AppError(404, "Category not found");
  }
  const res = await categoryModel.updateOne({ _id: id }, { $set: updatedDoc });

  return res;
};
export const categoryService = {
  createCategory,
  getCategory,
  updateCategory,
};
