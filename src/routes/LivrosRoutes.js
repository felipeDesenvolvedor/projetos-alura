import express from "express"
import LivroController from "../controllers/LivrosController.js"

const router = express.Router()

router.get("/livros", LivroController.listarLivros)
      .post("/livros", LivroController.cadastrarLivro)
      .put("/livros/:id", LivroController.atualizarLivro)
      .get("/livros/:id", LivroController.obterLivroPorId)
      .delete("/livros/:id", LivroController.deletarLivro)

export default router