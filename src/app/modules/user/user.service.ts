import config from "../../config";
import AppError from "../../errors/AppError";
import { TUser } from "./user.interface";
import userModel from "./user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//create user in database
const createUserIntoDB = async (payload: TUser) => {
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

//get all users
const getAllUsers = async () => {
  const res = await userModel.find().select("-password");
  return res;
};

//login user
const loginUser = async (payload: TUser) => {
  const isUserExist = await userModel.findOne({ email: payload.email });

  if (!isUserExist) {
    throw new AppError(409, "User does not Exits");
  }

  const isPasswordMatched = await bcrypt.compare(
    payload?.password,
    isUserExist?.password
  );

  if (!isPasswordMatched) {
    throw new AppError(401, "Wrong Password");
  }

  const jwtPayload = {
    _id: isUserExist?._id,
    role: isUserExist?.role,
    email: isUserExist?.email,
  };

  const accessToken = jwt.sign(jwtPayload, config.jwt_secret as string, {
    expiresIn: "7d",
  });

  return {
    user: {
      _id: isUserExist?._id,
      role: isUserExist?.role,
      email: isUserExist?.email,
    },
    token: accessToken,
  };
};

// Change Password
const changePassword = async (payload: {
  email: string;
  currentPassword: string;
  newPassword: string;
}) => {
  const isUserExist = await userModel.findOne({ email: payload.email });

  if (!isUserExist) {
    throw new AppError(404, "User does not Exits");
  }

  const isPasswordMatched = await bcrypt.compare(
    payload?.currentPassword,
    isUserExist?.password
  );

  if (!isPasswordMatched) {
    throw new AppError(401, "Wrong Password");
  }

  const newHashedPassword = await bcrypt.hash(
    payload.newPassword,
    Number(config.salt_rounds)
  );

  const result = await userModel.updateOne(
    { email: payload.email },
    { $set: { password: newHashedPassword } }
  );

  return result;
};

export const userServices = {
  createUserIntoDB,
  loginUser,
  changePassword,
  getAllUsers
};
