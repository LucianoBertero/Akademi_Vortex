import { Router } from "express";

const router = Router();

router.post("/login", () => console.log("hola desde auth"));
router.put("/register", () => console.log("hola desde auth"));

export default router;
