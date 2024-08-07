import { NextFunction, Request, Response } from "express";
import { validationResult, ValidationError } from "express-validator";
import HttpError from "../models/http-error";

const validarCampos = (req: Request, res: Response, next: NextFunction) => {
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.json({
      ok: false,
      message: "Errors",
      errors: { fields: errores.mapped() },
    });
  }
  next();
};

export default validarCampos;
