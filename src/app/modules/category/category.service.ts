import categoryModel from "./category.model";

const createCategory = async (payload: { name: string }) => {
  const res = await categoryModel.create(payload);
  return res;
};

const getCategory = async () => {
  const res = await categoryModel.find();
  return res;
};
export const categoryService = {
  createCategory,
  getCategory
};
