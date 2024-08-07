import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import HttpError from "../models/http-error";

interface RequestWithUid extends Request {
  uid?: string;
}

export const validarJwt = (
  req: RequestWithUid,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("x-token");

  if (!token) {
    return next(new HttpError("No hay token en la petición", 401));
  }

  try {
    const secret = process.env.JWT_SECRET ?? "mi_clave_secreta_predeterminada";
    const { uid } = jwt.verify(token, secret) as { uid: string };
    if (!uid || typeof uid !== "string") {
      return next(new HttpError("UID inválido", 401));
    }
    req.uid = uid;
    next();
  } catch (err) {
    const error = new HttpError("Token no válido", 401);
    return next(error);
  }
};
