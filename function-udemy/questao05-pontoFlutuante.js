function pontoFlutuante(numero) {
  return numero.toFixed(2).replace(".", ",");
}

console.log(`R$${pontoFlutuante(0.30000000000000004)}`);
