import HttpError from "../models/http-error";
import { validationResult } from "express-validator";
import { User } from "../models/user";
import { Request, Response, NextFunction } from "express";

import bcrypt from "bcrypt";
import { generateJWT } from "../helpers/generate-jwt";
import mongoose from "mongoose";

export const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("hola desde auth");
  const { user, email, password } = req.body;

  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    // Verificar si el email ya existe
    const existingUserByEmail = await User.findOne({ email }).session(session);
    if (existingUserByEmail) {
      await session.abortTransaction();
      session.endSession();
      return res.status(422).json({
        ok: false,
        message: "Email existente",
      });
    }

    // Verificar si el nombre de usuario ya existe
    const existingUserByName = await User.findOne({ name: user }).session(
      session
    );
    if (existingUserByName) {
      await session.abortTransaction();
      session.endSession();
      return res.status(422).json({
        ok: false,
        message: "Nombre de usuario existente",
      });
    }

    // Crear nuevo usuario
    const salt = bcrypt.genSaltSync();
    const newUser = new User({
      name: user,
      email,
      password: bcrypt.hashSync(password, salt),
    });

    // Guardar el usuario en la base de datos
    await newUser.save({ session });
    await session.commitTransaction();
    session.endSession();
    // Generar token
    const token = await generateJWT(newUser._id.toString());

    return res.json({
      newUser,
      token,
    });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    console.error("Error al registrar el usuario:", error);
    return next(new HttpError("No se pudo registrar el usuario", 500));
  }
};
export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;
  console.log(email, password);

  try {
    // Buscar el usuario por email en MongoDB
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(400).json({
        ok: false,
        mensaje: "El correo electrónico no existe en la base de datos",
      });
    }

    const validPassword = bcrypt.compareSync(password, existingUser.password);

    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        mensaje: "Credencial invalida",
      });
    }

    // Si llegamos aquí, el usuario y la contraseña son correctos
    const token = await generateJWT(existingUser._id.toString());

    return res.json({
      ok: true,
      usuario: existingUser,
      token,
    });
  } catch (error) {
    console.error("Error al procesar el inicio de sesión:", error);
    return next(new HttpError("No se pudo procesar el inicio de sesión", 500));
  }
};
