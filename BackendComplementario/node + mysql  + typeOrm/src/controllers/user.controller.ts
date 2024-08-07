import { Request, Response } from "express";
import { AppDataSource } from "../db/db.conection";
import { User } from "../entity/User";

const userRepository = AppDataSource.getRepository(User);

export const getUsers = async (req: Request, res: Response) => {
  console.log("entro");
  const users = await userRepository.find();
  res.json({ users });
};

export const getUserById = async (req: Request, res: Response) => {
  const id = req.params.id;
  const user = await userRepository.findOneBy({ id: parseInt(id) });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.json({ user });
};

export const createUser = async (req: Request, res: Response) => {
  const user = await userRepository.create(req.body);
  const results = await userRepository.save(user);
  return res.json({ user: results });
};

export const updateUser = async (req: Request, res: Response) => {
  const id = req.params.id;
  const user = await userRepository.findOneBy({ id: parseInt(id) });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  await userRepository.update(id, req.body);
  return res.json({ message: "User updated" });
};

export const deleteUser = async (req: Request, res: Response) => {
  const id = req.params.id;
  const user = await userRepository.findOneBy({ id: parseInt(id) });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  await userRepository.delete(id);
  return res.json({ message: "User deleted" });
};
