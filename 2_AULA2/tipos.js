const cliente = {
    nome: "João", 
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550","1144444440"],
}

console.log(cliente)
console.log(cliente.telefone)

const [telefone1, telefone2] = cliente.telefone

console.log(telefone1)
console.log(telefone2)

