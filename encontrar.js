const clientes = require ("./clientes.json");

function encontra (lista, chave, valor) {
    return lista.find ((item) => item[chave].includes(valor));
}

const encontrado = encontra (clientes, "email", "olippini0@deviantart.com");

console.log (encontrado);

