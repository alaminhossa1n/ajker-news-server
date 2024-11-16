import { model, Schema } from "mongoose";
import { TArticle } from "./article.interface";

const articleSchema = new Schema<TArticle>(
  {
    title: { type: String, required: true, trim: true },
    content: { type: String, required: true },
    image: { type: String, required: true },
    author_id: { type: Schema.Types.ObjectId, ref: "User", required: true },
    category_id: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    tags: { type: [String], default: [] },
    published_at: { type: Date, default: Date() },
    views: { type: Number, default: 0 },
    comments_count: { type: Number, default: 0 },
    is_breaking: { type: Boolean, default: false },
    is_featured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// Create the model
const ArticleModel = model<TArticle>("Article", articleSchema);

export default ArticleModel;
