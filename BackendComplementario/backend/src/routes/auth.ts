import { Router } from "express";

import { check } from "express-validator";
import validarCampos from "../middleware/validate-fields";
import { login, registerUser } from "../controller/auth";

const router = Router();

router.get(
  "/login",
  [
    check("password").notEmpty(),
    check("email").notEmpty().isEmail(),
    validarCampos,
  ],
  login
);
router.post(
  "/register",
  [
    check("user").notEmpty(),
    check("password").notEmpty(),
    check("email").notEmpty().isEmail(),
    //TODO: verificar el metodo "validarCampos"
    validarCampos,
  ],

  registerUser
);

export default router;
