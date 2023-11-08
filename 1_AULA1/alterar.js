const pessoa = {
    nome: "Luma",
    profissao: "Engenheira",
}

console.log(pessoa.nome);

console.log(pessoa.telefone);

pessoa.telefone = "38371614";

console.log(pessoa.telefone);

console.log(pessoa)

pessoa.nome = "Luma Silva";

console.log(pessoa)

// em const não se pode reatribuir o objeto inteiro porem pode se alterar os parametros de dentro do objeto
const novaPessoa = {
    nome: "Pedro",
}

novaPessoa = {
    nome: "Joaoa"
}


console.log(novaPessoa)