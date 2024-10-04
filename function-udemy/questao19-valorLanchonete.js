//Do 100 ao 600
function calcularValor(codigo, quantidade) {
  let valor;
  let total;
  switch (codigo) {
    case (codigo = 100):
      codigo = "Cachorro quente";
      valor = 3;
      total = valor * quantidade;
      console.log(
        `Você pediu ${quantidade} ${codigo} totalizando: R$${total.toFixed(2)} `
      );
      break;
    case (codigo = 200):
      codigo = "Hambúrguer Simples";
      valor = 4;
      total = valor * quantidade;
      console.log(
        `Você pediu ${quantidade} ${codigo} totalizando: R$${total.toFixed(2)} `
      );
      break;
    case (codigo = 300):
      codigo = "Cheeseburguer";
      valor = 5.5;
      total = valor * quantidade;
      console.log(
        `Você pediu ${quantidade} ${codigo} totalizando: R$${total.toFixed(2)} `
      );
      break;
    case (codigo = 400):
      codigo = "Bauru";
      valor = 7.5;
      total = valor * quantidade;
      console.log(
        `Você pediu ${quantidade} ${codigo} totalizando: R$${total.toFixed(2)} `
      );
      break;
    case (codigo = 500):
      codigo = "Refrigerante ";
      valor = 3.5;
      total = valor * quantidade;
      console.log(
        `Você pediu ${quantidade} ${codigo} totalizando: R$${total.toFixed(2)} `
      );
      break;
    case (codigo = 600):
      codigo = "Suco";
      valor = 2.8;
      total = valor * quantidade;
      console.log(
        `Você pediu ${quantidade} ${codigo} totalizando: R$${total.toFixed(2)} `
      );
      break;
  }
}

calcularValor(600, 3);
