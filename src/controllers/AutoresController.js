import autores from "../models/Autores.js"

class AutorController {
     static listarAutores = (req, res) => {
        autores.find((err, autores) => {
            res.status(200).json(autores)
        })
    }

    static cadastrarAutores = (req, res) => {
        let livro = new autores(req.body)

        livro.save((err) => {
            if(err) {
                res.status(500).send({message:`${err.message} - falha ao cadastrar livro.`})
            } else {
                res.status(201).send(livro.toJSON())
            }
        })
    }

    static atualizarAutores = (req, res) => {
        let dados = req.body
        let idAutores = req.params.id

        autores.findByIdAndUpdate(idAutores, {$set: dados}, (err) => {
            if(!err) {
                res.status(200).send({message: 'Autores atualizado com sucesso'})
            }else {
                res.status(500).send({message:`${err.message} - falha ao atualizar o livro.`})
            }   
        })
    }

    static obterAutoresPorId = (req, res) => {
        let idAutores = req.params.id 
        
        autores.findById(idAutores, (err, livro)=> {
            if(!err) {
                res.status(200).send(livro)
            }else {
                res.status(500).send({message:`${err.message} - falha ao buscar o livro`})
            }
        })
    }

    static deletarAutores = (req, res) => {
        let idAutores = req.params.id 
        
        autores.findByIdAndDelete(idAutores, (err, livro)=> {
            if(!err) {
                res.status(200).send({message:'Autores deletado com sucesso !!'})
            }else {
                res.status(500).send({message:`${err.message} - falha ao deletar o livro !!`})
            }
        })
    }
}

export default AutorController