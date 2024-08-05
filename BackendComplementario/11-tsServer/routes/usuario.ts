import { Router } from "express";
import {
  deleteUser,
  getUserById,
  getUsers,
  postUsers,
  updateUser,
} from "../controllers/usuarios";

const router = Router();

router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", postUsers);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
