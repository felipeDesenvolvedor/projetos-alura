import express from "express";

const app  = express();

app.use(express.json())

const livros  = [
    {
        id:1,
        titulo:"livro 1"
    },
    {
        id:2,
        titulo:"livro 2"
    } 
]


app.get('/',  (req, res)=> {
    res.status(200).send("Curso de Node")
})

app.get('/livros', (req, res) => {
    res.status(200).json(livros)
})

app.post('/livros', (req, res)=> {
    livros.push(req.body)
    res.status(201).send('Livro criado com sucesso !!')
})

function buscaLivro(id) {
   return livros.findIndex(livro => {
        return livro.id == id
    })

    // return livros.findIndex(livro => livro.id == id)
}

app.put('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id)
    livros[index].titulo = req.body.titulo
    res.json(livros)
})

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