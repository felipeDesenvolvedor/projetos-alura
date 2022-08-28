const chalk = require('chalk');
const fs = require('fs');

const trataErro = (erro) => {
  throw new Error(chalk.red(erro.code))
}

// fs.readFile('./arquivos/texto1.md', 'utf-8', (erro, data)=> {
  
//   if(erro) {
//     trataErro(erro)
//   }

//   console.log(chalk.green(data))
// })

// fs.promises.readFile('./arquivos/texto1.md', 'utf-8')
// .then(data => console.log(chalk.green(data)))
// .catch(erro => console.log(chalk.red(erro)))

async function lerArquivo() {
  try {
    const file = await fs.promises.readFile('./arquivos/texto1.md', 'utf-8')
    // console.log(file.match(/\[([^\]]*)\]\(https?:\/\/[^$#\s].[^\s]*\)/gm)) // Expressão usada no curso
    console.log(file.match(/\d*\.\d*\.\d*-\d*/gm)) //Buscando CPF no meio do texto  
  } catch (error) {
    trataErro(error)
  } finally {
    console.log(chalk.yellow("Operação concluida !!!"))
  }
}

lerArquivo()

