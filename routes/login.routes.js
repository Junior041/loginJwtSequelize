import express from "express";
import loginController from "../controller/login.controller.js";
import jwt from "../utils/jwt.js";
const router = express.Router();
router.get("/criar/tabela", loginController.criarTabela);
router.post("/criar/usuario", loginController.criarUsuario);
router.post("/entrar", loginController.buscarUsuario);
router.get("/testeLogin", jwt.validaToken, loginController.testeLogin);
export default router;
