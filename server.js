const http = require('node:http');
const CircularJSON = require('circular-json');
const stringifyFlatted = require('flatted')

const port = 3000;

const rotas = {
    '/':'curso de node',
    '/livros': 'entrei na pagina de livros', 
    '/autores':'entrei na pagina de autores',
    '/sobre':'sobre'
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-type': 'application/json'})
    res.end(rotas[req.url])
})

server.listen(port, ()=> {
    console.log(`Servidor escutando em http://localhost:${port}`)
})