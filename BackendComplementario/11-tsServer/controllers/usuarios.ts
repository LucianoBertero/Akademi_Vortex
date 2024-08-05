import { Request, Response } from "express";

export const getUsers = (req: Request, res: Response) => {
  res.json({
    msg: "getUsers",
  });
};

export const getUserById = (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({
    msg: "getUsers",
    id,
  });
};

export const postUsers = (req: Request, res: Response) => {
  const { body } = req;
  console.log(body);
  res.json({
    msg: "postUser",
    body,
  });
};

export const updateUser = (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;
  res.json({
    msg: "getUsers",
    body,
    id,
  });
};

export const deleteUser = (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({
    msg: "getUsers",
    id,
  });
};
