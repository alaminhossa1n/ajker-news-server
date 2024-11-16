import AppError from "../../errors/AppError";
import { TUser } from "./user.interface";
import userModel from "./user.model";

const CreateUserIntoDB = async (payload: TUser) => {
  const isUserExist = await userModel.findOne({ email: payload.email });

  if (isUserExist) {
    throw new AppError(409, "User Already Exist.");
  }

  const result = await userModel.create(payload);

  const userWithoutPassword = await userModel
    .findById(result._id)
    .select("-password");

  return userWithoutPassword;
};

export const userServices = {
  CreateUserIntoDB,
};
