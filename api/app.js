import express from "express";
import cors from "cors";
import env from "dotenv";

const app = express();

env.config({
  path: "./.env",
});

app.use(
  express.json({
    limit: "16kb",
  })
);

app.use(
  cors({
    origin: process.env.ORIGIN,
    credentials: true,
  })
);

app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// routes
import userRouter from "./routes/user.route.js";

app.use("/api/user", userRouter);

export default app;
