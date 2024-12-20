import { model, Schema } from "mongoose";

const categorySchema = new Schema<{ name: string }>(
  {
    name: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const categoryModel = model<{ name: string }>("Category", categorySchema);

export default categoryModel;
