const cliente = {
    nome: "João", 
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550","1144444440"],
    saldo: 200,
    efetuaPagamento: function(valor){
        if(valor > this.saldo){
            console.log("Saldo insuficiente")
        }else{
            this.saldo -= valor
            console.log(`Pagamento realizado com sucesso, novo saldo ${this.saldo}`)
        }
    }
};

cliente.efetuaPagamento(25);
console.log(cliente);