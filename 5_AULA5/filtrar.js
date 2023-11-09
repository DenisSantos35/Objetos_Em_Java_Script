const clientes = require('./clientes.json')

function encontrar(clientes){
    return clientes.filter((cliente)=>{
        return (cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty("complemento"))
    })
}

const filtrado = encontrar(clientes);

console.log(filtrado)