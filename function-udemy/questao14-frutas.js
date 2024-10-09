/**Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
também um default, que retornará uma mensagem de erro no console.
 */

function feira(fruta) {
  switch (fruta) {
    case "Maçã".toLowerCase():
      console.log("Não vendemos esta fruta aqui");
      break;
    case "Kiwi".toLowerCase():
      console.log("Estamos com escassez de Kiwis");
      break;
    case "Melancia".toLowerCase():
      console.log("Aqui está, são R$3 reais o quilo");
      break;
    default:
      console.log("Não entendi, pode repetir?");
  }
}

feira("Banana");
