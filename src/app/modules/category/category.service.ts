import categoryModel from "./category.model";

const createCategory = async (payload: { name: string }) => {
  const res = await categoryModel.create(payload);
  return res;
};

export const categoryService = {
  createCategory,
};
