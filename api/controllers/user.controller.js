import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

User.methods.pre("save", function () {
  if (User.ismodified("password")) {
    this.password = bcrypt.hash(this.password, 10);
  }
});

const generateRefreshToken = () => {
  jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: "10d" }
  );
};

const generateAccessToken = () => {
  jwt.sign(
    {
      _id: this._id,
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "1d" }
  );
};

const registerUser = () => {};

export { registerUser };
