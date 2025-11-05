import express from "express";
import { registrarUsuario } from "../controllers/user_controllers";

const router = express.Router();

router.post("/register", registrarUsuario);

export default router;
