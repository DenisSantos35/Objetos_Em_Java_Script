const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "112233445",
    email: "andre@dominio.com"
}

console.log(cliente)
console.log(`O nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} anos`);

const chaves = ["nome", "idade", "cpf", "email", "altura"]

// para itereçao é melhor utilzar o metodo de colchetes
chaves.forEach((chave)=>{
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`)
})