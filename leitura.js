const dados = require("./Json/cliente.json");

console.log (dados);
console.log (typeof dados);


//stringify -> transforma o json (que era um objeto) em string 
const clienteEmString = JSON.stringify(dados);

console.log (clienteEmString);
console.log (typeof clienteEmString);
console.log (clienteEmString.nome);

//parse -> retorna para JSON 
const obejtoCliente = JSON.parse(clienteEmString)

console.log (obejtoCliente);



