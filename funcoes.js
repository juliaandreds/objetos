const cliente = {
    nome: "Julia",
    email: "julia@cliente.com",
    telefone: ["22909468", "992577272"],
    saldo: 200,
    efetuaPagamento: function (valor) {
        if (valor > this.saldo) {
            console.log ("Saldo insuficiente!");
        } else {
            this.saldo -= valor;
            console.log (`Pagamento realizado. Seu novo saldo é ${this.saldo}`)
        }
    }
}

cliente.efetuaPagamento (200);

