import express, { Application } from "express";
import cors from "cors";

const app: Application = express();

const corsOptions = {
  origin: ["http://localhost:5173", "https://recipe-sharing-ah.netlify.app"],
  credentials: true,
};

app.use(express.json());
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Server is ON.......");
});

export default app;
