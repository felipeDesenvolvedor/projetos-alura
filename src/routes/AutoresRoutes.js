import express from "express"
import AutoresController from "../controllers/AutoresController.js"

const router = express.Router()


router.get("/autores", AutoresController.listarAutores)
      .post("/autores", AutoresController.cadastrarAutores)
      .put("/autores/:id", AutoresController.atualizarAutores)
      .get("/autores/:id", AutoresController.obterAutoresPorId)
      .delete("/autores/:id", AutoresController.deletarAutores)

export default router      