import {haldleStatus, log} from "./utils/promise-helpers.js"
import './utils/array-helpers.js'

const sumItens = code => notas => notas
    .$flatMap(nota => nota.itens)
    .filter(item => item.codigo == code)
    .reduce((total, item) => total + item.valor, 0)

document.querySelector('#myButton').onclick = () =>
fetch('http://localhost:3000/notas')
.then(haldleStatus)
.then(sumItens('2143'))
.then(log)
.catch(log)



// fetch('viacep.com.br/ws/08490009/json/')
// .then(res => {
//     if(res.ok) return res.json();   

//     return Promise.reject(res.statusText)
// })
// .then(console.log)
// .catch(err => console.log('err'+err))