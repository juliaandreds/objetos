const pessoa = {
    nome:"Bruce Banner",
    dataNascimento:"25/01/1980",
    carteiraIdentidade:"997776-X",
    email:"profbanner@email.com",
    telefone:"+552877776666",
    cidade:"Cachoeiro de Itapemirim",
    estado:"ES"
 }

 pessoa.planoDeSaude = "Assim";
 pessoa.cpf = "15077596735";

 const chaves = ["nome", "dataNascimento", "carteiraIdentidade", "email", "telefone", "cidade", "estado", "planoDeSaude", "cpf"]

 chaves.forEach ((chave) => {
    console.log (`A chave ${chave} tem valor ${pessoa[chave]}`)
 })
 
//como recebr como valor do cpf e carteira de nascimento apenas os 4 digitos iniciais?

