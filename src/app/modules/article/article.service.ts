import { isValidObjectId } from "mongoose";
import AppError from "../../errors/AppError";
import { TArticle } from "./article.interface";
import ArticleModel from "./article.model";

const createArticle = async (payload: TArticle) => {
  const res = await ArticleModel.create(payload);
  return res;
};

//get all articles
const getAllArticles = async () => {
  const res = await ArticleModel.find();
  return res;
};

//update articles
const updateArticle = async (id: string, updatedDoc: Partial<TArticle>) => {
  const isValid = isValidObjectId(id);
  if (!isValid) {
    throw new AppError(406, "Invalid ObjectId");
  }

  const isArticle = await ArticleModel.findById(id);

  if (!isArticle) {
    throw new AppError(404, "Article not found");
  }

  const result = await ArticleModel.updateOne(
    { _id: id },
    { $set: updatedDoc }
  );

  return result;
};

export const articleService = {
  createArticle,
  getAllArticles,
  updateArticle,
};
