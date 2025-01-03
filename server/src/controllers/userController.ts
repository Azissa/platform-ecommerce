import { Request, Response } from "express";
import {
  createUser,
  showAllUsers,
  showUserById,
} from "../services/userService";

export const postUser = async (req: Request, res: Response) => {
  const {
    avatar,
    first_name,
    last_name,
    username,
    email,
    password,
    birth_of_date,
    phone_number,
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
      phone_number,
    });
    res.status(201).json({ message: "user created", user });
  } catch (error) {
    res.status(500).json({ message: "failed to create user", error });
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const user = await showAllUsers();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "failed to fetch user", error });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await showUserById(id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "user not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "failed to fetch user", error });
  }
};
