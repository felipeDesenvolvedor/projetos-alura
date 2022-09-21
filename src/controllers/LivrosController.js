import livros from "../models/Livro.js"

class LivroController {
    static listarLivros = (req, res) => {
        // -- Sem associação com outro Scheema
        // livros.find((err, livros) => {
        //     livros[0].teste = 'teste'
        //     console.log(livros)
        //     res.status(200).json(livros)
        // })

        livros.find()
        .populate('autor')
        .exec((err, livros) => {
            res.status(200).json(livros)
        })
    }

    static cadastrarLivro = (req, res) => {
        let livro = new livros(req.body)

        livro.save((err) => {
            if(err) {
                res.status(500).send({message:`${err.message} - falha ao cadastrar livro.`})
            } else {
                res.status(201).send(livro.toJSON())
            }
        })
    }

    static atualizarLivro = (req, res) => {
        let dados = req.body
        let idLivro = req.params.id

        livros.findByIdAndUpdate(idLivro, {$set: dados}, (err) => {
            if(!err) {
                res.status(200).send({message: 'Livro atualizado com sucesso'})
            }else {
                res.status(500).send({message:`${err.message} - falha ao atualizar o livro.`})
            }   
        })
    }

    static obterLivroPorId = (req, res) => {
        let idLivro = req.params.id 
        
        // -- Com associação de outro Scheema
        // livros.findById(idLivro, (err, livro)=> {
        //     if(!err) {
        //         res.status(200).send(livro)
        //     }else {
        //         res.status(500).send({message:`${err.message} - falha ao buscar o livro`})
        //     }
        // })

        livros.findById(idLivro)
        .populate('autor')
        .exec((err, livros) => {
            res.status(200).json(livros)
        })
    }

    static deletarLivro = (req, res) => {
        let idLivro = req.params.id 
        
        livros.findByIdAndDelete(idLivro, (err, livro)=> {
            if(!err) {
                res.status(200).send({message:'Livro deletado com sucesso !!'})
            }else {
                res.status(500).send({message:`${err.message} - falha ao deletar o livro !!`})
            }
        })
    }
}

export default LivroController