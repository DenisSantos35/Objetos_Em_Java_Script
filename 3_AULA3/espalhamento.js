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

function ligaParaCliente(telefoneComercial, telefoneResidencial){
    console.log(`Ligando para ${telefoneComercial}`)
    console.log(`Ligando para ${telefoneResidencial}`)
}
//podemos chamar de diversas formas, por desconstrução
const [telefone0, telefone1] = cliente.telefone
ligaParaCliente(telefone0, telefone1);

//por parametro
ligaParaCliente(cliente.telefone[0], cliente.telefone[1])

//por espalhamento
ligaParaCliente(...cliente.telefone)

//forma bruta de resolver caso nao queira objetos aninhados
const encomenda = {
    destinatario: cliente.nome,
    rua: cliente.enderecos[0].rua,
    numero: cliente.enderecos[0].numero,
    // enderecos: cliente.enderecos[0]
}

// forma mais prática é através de espalhamentp spredOperator onde espalha o objeto por completo

const encomenda2 = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0]
}
console.log(encomenda2)

// outros testes

const fichaGuerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
   }
   
   const equipoGuerreiro = {
    espada: "Andúril",
    capa: "capa élfica +2"
   }

//    const guerreiro = { fichaGuerreiro, equipoGuerreiro }
//    console.log(guerreiro)

const guerreiro = { ...fichaGuerreiro, ...equipoGuerreiro }
console.log(guerreiro)

//objetos com mesmo nome e sobrescrito
const mago = {
 nome: "Gandalf",
 classe: "mago"
}
 const guerreiro2 = {
 nome: "Aragorn",
 classe: "guerreiro"
}

const ranger = {
 nome: "Legolas",
 classe: "ranger"
}

const personagens = { ...mago, ...guerreiro2, ...ranger }
console.log(personagens)