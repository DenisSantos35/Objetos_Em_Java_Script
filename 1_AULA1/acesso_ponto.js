const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "112233445",
    email: "andre@dominio.com"
}

console.log(cliente)
console.log(`O nome do cliente é ${cliente.nome} e essa pessoa tem ${cliente.idade} anos`)

// metodo do value objeto
console.log(`os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0,3)}`)