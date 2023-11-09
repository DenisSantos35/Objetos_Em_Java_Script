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

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes("enderecos")) console.error("Erro. É necessário ter um endereco cadastrado");
console.log(Object.__proto__)