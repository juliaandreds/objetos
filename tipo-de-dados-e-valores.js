const cliente = {
    nome: "Julia",
    email: "julia@cliente.com",
    telefone: ["22909468", "992577272"],
}

//console.log (cliente.telefone);

//aninhando 

cliente.enderecos = [

    {
        rua: "R. Alecrim",
        numero: 265,
        apartamento: true,
        complemento: "apt 125",
    },
]

cliente.enderecos.push ({
    rua: "R. Maceio",
    numero: 120,
    apartamento: false,
})

cliente.enderecos.push ({
    rua: "R. Para",
    numero: 12,
    apartamento: true,
    complemento: "apt 102",
})

const listaApenasCasa = cliente.enderecos.filter ((enderecos) => enderecos.apartamento === false);



console.log (listaApenasCasa);