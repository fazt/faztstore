import { Request, Response } from "express";
import User from "../models/user.model";
import { generateAccessToken } from "../libs/jwt";
import { SingupSchemaType } from "../schemas/auth.schema";

export const signupHandler = async (
  req: Request<unknown, unknown, SingupSchemaType>,
  res: Response
) => {
  const { name, lastname, email, password } = req.body;

  const userFound = await User.findOne({ email });
  if (userFound)
    return res.status(400).json({ message: "User already exists" });

  const user = new User({
    name,
    lastname,
    email,
    password,
  });
  user.password = await user.encryptPassword(user.password);
  const savedUser = await user.save();
  const token = generateAccessToken({ id: savedUser._id });

  res.header("auth-token", token).json({ token });
};

export const signinHandler = async (req: Request, res: Response) => {};
