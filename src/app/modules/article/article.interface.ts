import { ObjectId } from "mongoose";

export type TArticle = {
  title: string;
  content: string;
  image: string;
  author: ObjectId;
  category: ObjectId;
  tags: string[];
  published_at?: Date;
  views: number;
  comments_count: number;
  is_breaking: boolean;
  is_featured: boolean;
};
