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
  const articles = await ArticleModel.find()
    .populate("author", "name")
    .populate("category", "name");
  return articles;
};

//get breakings
const getBreakings = async () => {
  const articles = await ArticleModel.find({ is_breaking: true })
    .populate("author", "name")
    .populate("category", "name");
  return articles;
};

//get featured
const getFeatured = async () => {
  const articles = await ArticleModel.find({ is_featured: true })
    .populate("author", "name")
    .populate("category", "name");
  return articles;
};

//get tending
const getTending = async () => {
  const articles = await ArticleModel.find({
    published_at: { $gte: new Date(Date.now() - 48 * 60 * 60 * 1000) },
  })
    .populate("author", "name")
    .populate("category", "name");
  return articles;
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
  getBreakings,
  getFeatured,
  getTending,
};
