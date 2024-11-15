import express from "express";
import cors from "cors";
import env from "dotenv";

env.config({
  path: "./api/.env",
});

app.use(
  express.json({
    limit: "16kb",
  })
);

app.use(
  cors({
    origin: process.env.ORIGIN,
  })
);

app.use(express.urlencoded({ extended: true, limit: "16kb" }));

export default app;
