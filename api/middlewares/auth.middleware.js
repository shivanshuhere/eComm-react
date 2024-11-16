import { User } from "./models/user.model.js";
import jwt from "jsonwebtoken";
import asyncHandler from "../utils/asyncHandler.js";

const verifyJWT = asyncHandler(async (req, _, next) => {
  const accessToken = req.cookies["accessToken"];
  const payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
  const user = User.findById(payload?._id);
  if (!user) {
    res.status(401).json({
      sucess: false,
      message: "Unauthorized",
    });
    next();
  }
  req.user = user;
  next();
});

export { verifyJWT };
