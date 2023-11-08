const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
   }

   console.log(objPersonagem.aliado.nome)
   const deletado = delete objPersonagem.telefone
   console.log(deletado)
   delete objPersonagem["status"]

   console.log(objPersonagem)