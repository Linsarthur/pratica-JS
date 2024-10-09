/*
As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false.
*/

function anoBissexto(ano) {
  const bissexto = ano % 4 === 0 && ano % 400 === 0;
  const bissextoTerminadoEmZero = ano % 100 === 0;
  if (bissexto) {
    console.log(`O ano ${ano} é bissexto`);
  } else if (bissextoTerminadoEmZero) {
    console.log(`O ano ${ano} não é bissexto`);
  } else {
    console.log(`O ano ${ano} não é bissexto`);
  }
  return anoBissexto;
}

anoBissexto(2023);
