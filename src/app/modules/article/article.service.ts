import { TArticle } from "./article.interface";
import ArticleModel from "./article.model";

const createArticle = async (payload: TArticle) => {
  const res = await ArticleModel.create(payload);
  return res;
};

export const articleService = {
  createArticle,
};
