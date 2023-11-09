const dados = require('./clientes.json')

function encontrar(lista, chave, valor){
    return lista.find((item)=> item[chave].includes(valor));    
}

const encontrar1 = encontrar(dados, "nome", "Kirby");
console.log(encontrar1)
const encontrar2 = encontrar(dados, "telefone", "2492442110")
console.log(encontrar2)