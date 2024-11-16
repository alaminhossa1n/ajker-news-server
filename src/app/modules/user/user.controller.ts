import { NextFunction, Request, Response } from "express";
import { userServices } from "./user.service";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await userServices.CreateUserIntoDB(req.body);
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

export const userController = {
  createUser,
};
