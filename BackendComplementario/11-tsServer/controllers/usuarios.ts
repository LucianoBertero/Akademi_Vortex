import { Request, Response } from "express";
import Usuario from "../models/usuario";

export const getUsers = async (req: Request, res: Response) => {
  const usuarios = await Usuario.findAll();
  res.json({
    msg: "getUsers",
    usuarios,
  });
};

export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const usuario = await Usuario.findByPk(id);

  if (!usuario) {
    res.json({
      usuario,
    });
  } else {
    res.status(404).json({
      msg: "usuario no existe",
    });
  }
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

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const usuario = await Usuario.findByPk(id);
  if (!usuario) {
    res.json({
      usuario,
    });
  }
  // await usuario?.destroy();

  await usuario?.update({ estado: false });

  res.json({
    msg: "getUsers",
    id,
  });
};
