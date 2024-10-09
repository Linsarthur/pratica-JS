//Faça um algoritmo que calcule o fatorial de um número.
function fatorial(numero) {
  let contador = 1;
  for (let i = 1; i <= numero; i++) {
    contador *= i;
  }
  return contador;
}
console.log(fatorial(5));
