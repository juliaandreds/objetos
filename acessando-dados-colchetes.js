const cliente = {
    nome : "Julia",
    idade : 23,
    cpf : "15077596735",
}

console.log (`A idade de ${cliente["nome"]} é ${cliente["idade"]}`)
console.log (`O cpf de ${cliente["nome"]} tem os 3 digitos inicias como: ${cliente["cpf"].substring(0,3)}`);

const chaves = ["nome", "idade", "cpf", "email"];

chaves.forEach ((chave) => {
    console.log (`A chave ${chave} tem valor: ${cliente[chave]}`)
})


