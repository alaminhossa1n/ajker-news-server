import { ObjectId } from "mongoose";

export type TArticle = {
  title: string;
  content: string;
  image: string;
  author_id: ObjectId;
  category_id: ObjectId;
  tags: string[];
  status: "draft" | "published" | "archived";
  published_at?: Date;
  views: number;
  comments_count: number;
  is_breaking: boolean;
  is_featured: boolean;
};
