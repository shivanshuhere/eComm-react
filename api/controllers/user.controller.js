import { User } from "../models/user.model.js";
import asyncHandler from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  const { firstname, lastname, email, password, address } = req.body;

  if ([firstname, email, password, address].includes("")) {
    return res.status(400).json({ error: "All fields are required" });
  }
  // user exists
  let user;
  user = await User.findOne({ email: email });
  if (user)
    return res.status(401).json({
      message: "user already exists with email",
    });
  try {
    user = await User.create({
      firstname,
      lastname,
      email,
      password,
      address,
    });
    const newUser = await User.findOne({ email: email }).select(
      "-password -refreshToken"
    );
    if (!newUser)
      return res.status(400).json({ error: "failed t o create user" });
    return res.status(201).json({
      message: "user created successfully",
      user: newUser,
    });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "failed to create user", error: error.message });
  }
});

export { registerUser };
