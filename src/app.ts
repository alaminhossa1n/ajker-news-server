import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { userRoutes } from "./app/modules/user/user.routes";

const app: Application = express();

const corsOptions = {
  origin: ["http://localhost:5173", "https://recipe-sharing-ah.netlify.app"],
  credentials: true,
};

app.use(express.json());
app.use(cors(corsOptions));

app.use("/api/user", userRoutes);

//global error handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err); // Log the error for debugging

  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.get("/", (req, res) => {
  res.send("Server is ON.......");
});

export default app;
