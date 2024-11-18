import { NextFunction, Request, Response } from "express";
import { userServices } from "./user.service";
import jwt from "jsonwebtoken";
import config from "../../config";
import AppError from "../../errors/AppError";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await userServices.createUserIntoDB(req.body);
    res.status(201).json({
      success: true,
      statusCode: 201,
      message: "User created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

//get all users
const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await userServices.getAllUsers();
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "User retrieved successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

///login user
const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await userServices.loginUser(req.body);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "User login successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

//change password
const changePassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await userServices.changePassword(req.body);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Password changed successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

//update user
const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    const updatedDoc = req.body;

    const tokenWithBearer = req.headers.authorization;
    const token = tokenWithBearer?.split(" ");

    if (!token) {
      throw new AppError(401, "You are unauthorized");
    }
    try {
      const decoded = (await jwt.verify(
        token[1],
        config.jwt_secret as string
      )) as { _id: string };

      if (id !== decoded._id) {
        throw new AppError(401, "You are unauthorized");
      }
    } catch (error) {
      throw new AppError(401, "Invalid token");
    }

    const result = await userServices.updateUser(id, updatedDoc);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "User Updated successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const userController = {
  createUser,
  loginUser,
  changePassword,
  getAllUsers,
  updateUser,
};
