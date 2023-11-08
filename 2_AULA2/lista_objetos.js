const cliente = {
    nome: "João", 
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550","1144444440"],
};

cliente.enderecos =[
    {
        rua: "Rua Joseph Climber",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934",
    },
]

cliente.enderecos.push({
        rua: "Rua Joseph Ladder",
        numero: 404,
        apartamento: false,
        complemento: "",
})

cliente.enderecos.push({
    rua: "Rua Joseph Ladder",
    numero: 600,
    apartamento: true,
    complemento: "ap 02",
})

//console.log(cliente)
//console.log(cliente.enderecos)

const listaApenasApartamentos = cliente.enderecos.filter((endereco)=> endereco.apartamento === true)

console.log(listaApenasApartamentos)