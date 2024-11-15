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

const registerUser = async (req, res) => {
  const { firstname, lastname, email, password, address } = req.body;

  if ([firstname, email, password, address].includes("")) {
    return res.status(400).json({ error: "All fields are required" });
  }
  try {
    const user = await User.create({
      firstname,
      lastname,
      email,
      password,
      address,
    });
    const newUser = User.findOne({ email: email }).select(
      "-password -refreshToken"
    );
    if (!newUser) return res.status(400).json({ error: "User not found" });
    return res.status(201).json({
      message: "user created successfully",
      user: newUser,
    });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "failed to create user", error: error.message });
  }
};

export { registerUser };
