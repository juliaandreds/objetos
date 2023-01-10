const clientes = require ("./clientes.json");

function encontraApartamentoSemComplemento (clientes) {
    return clientes.filter ((cliente) => { 
        return (
            cliente.endereco.apartamento &&
            !cliente.endereco.hasOwnProperty("complemento"));
    })
}

const filtrado = encontraApartamentoSemComplemento (clientes);

console.log (filtrado);