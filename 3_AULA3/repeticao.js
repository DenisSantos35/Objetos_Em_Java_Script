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

//console.log(cliente);

for(let key in cliente){
    let tipo = typeof cliente[key]
    if(tipo!= "object" && tipo != "function"){
        console.log(`A chave  ${key} tem o valor ${cliente[key]}`)
    }    
}