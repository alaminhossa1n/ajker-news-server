import { NextFunction, Request, Response } from "express";
import config from "../config";
import AppError from "../errors/AppError";
import jwt, { JwtPayload } from "jsonwebtoken";

const auth = (...roles: any) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const tokenWithBearer = req.headers.authorization;
    const token = tokenWithBearer?.split(" ");
    
    if (!token) {
      throw new AppError(401, "You are unauthorized");
    }

    jwt.verify(token[1], config.jwt_secret as string, (err, decoded) => {
      if (err) {
        throw new AppError(401, "You are unauthorized");
      }
      const role = (decoded as JwtPayload).role;

      if (roles && !roles.includes(role)) {
        throw new AppError(401, "You are unauthorized");
      }
    });

    next();
  };
};

export default auth;
