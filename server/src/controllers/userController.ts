import { Request, Response } from "express";
import { createUser } from "../services/userService";

export const postLog = async (req: Request, res: Response) => {
  const {
    avatar,
    first_name,
    last_name,
    username,
    email,
    password,
    birth_of_date,
  } = req.body;

  try {
    const user = await createUser({
      avatar,
      first_name,
      last_name,
      username,
      email,
      password,
      birth_of_date,
    });
    res.status(201).json({ message: "user created", user });
  } catch (error) {
    res.status(500).json({ message: "failed to create user", error });
  }
};

export const getUser = async(req:Request,res:Response) => {
  try {
    const user = await 
  }
}
