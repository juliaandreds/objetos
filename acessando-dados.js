/* const cpf = [1111, 22222, 33333];

console.log (cpf); */

const informacoes = {
    nome : "Julia",
    idade : 23,
    cpf : "15077596735",
}

// utilizar "."significa informar qual propriedade eu quero saber em específico.
console.log (`O nome do cliente é ${informacoes.nome} e sua idade é: ${informacoes.idade}`);

// substring 
console.log (`Os três primeiros dígitos do CPf de ${informacoes.nome} é ${informacoes.cpf.substring(0,3)}`);



