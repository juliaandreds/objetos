/* const cpf = [1111, 22222, 33333];

console.log (cpf); */

const cliente = {
    nome : "Julia",
    idade : 23,
    cpf : "15077596735",
}

// utilizar "."significa informar qual propriedade eu quero saber em específico.
console.log (`O nome do cliente é ${cliente.nome} e sua idade é: ${cliente.idade}`);

// substring 
console.log (`Os três primeiros dígitos do CPf de ${cliente.nome} é ${cliente.cpf.substring(0,3)}`);



