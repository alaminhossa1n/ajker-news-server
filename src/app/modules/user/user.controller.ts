import { NextFunction, Request, Response } from "express";
import { userServices } from "./user.service";

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
      statusCode: 201,
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
      statusCode: 201,
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
      statusCode: 201,
      message: "Password changed successfully",
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
};
