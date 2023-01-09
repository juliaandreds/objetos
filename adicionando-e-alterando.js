const pessoa = {
    nome : "Julia",
    profissão : "professora",
}

console.log (pessoa.nome);

console.log (pessoa.telefone);

pessoa.telefone = "992577272";

console.log (pessoa.telefone);

pessoa.nome = "Julia André";

console.log (pessoa)

const novaPessoa ={
    nome: "Ana",
}

//deletar informação do objeto
delete pessoa.telefone;

console.log (pessoa.telefone);

