const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
  };
  
/*   cliente.enderecos = [
    {
      rua: "R. Joseph Climber",
      numero: 1337,
      apartamento: true,
      complemento: "ap 934",
    },
  ]; */

  const chaveDoObjeto = Object.keys (cliente);

  console.log (chaveDoObjeto);

  if (!chaveDoObjeto.includes("enderecos")) {
    console.log ("Erro! Endereço não cadastrado");
  }