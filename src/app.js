import express from "express";
import db from "./config/dbConnect.js"
import livros from "./models/Livro.js"
import routes from "./routes/index.js"

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
    console.log("conexão com banco feita com sucesso")
})

const app  = express();
routes(app)

// app.post('/livros', (req, res)=> {
//     console.log(req.body)
//     res.status(201).send('Livro criado com sucesso !!')
// })

function buscaLivro(id) {
   return livros.findIndex(livro => {
        return livro.id == id
    })
}

// app.put('/livros/:id', (req, res) => {
//     let index = buscaLivro(req.params.id)
//     livros[index].titulo = req.body.titulo
//     res.json(livros)
// })

app.delete('/livros/:id', (req, res) => {
    let {id} = req.params
    let index = buscaLivro(id)

    if(index == -1) {
        res.send(`Livro ${id} já foi removido`)
        return
    }

    livros.splice(index, 1)
    res.send(`Livro ${id} removido com sucesso`)
})


export default app