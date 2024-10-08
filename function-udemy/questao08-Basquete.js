/*Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
array com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo). */

const pontuacoesString = "10 20 20 8 25 3 0 30 1";

function analisarJogos(pontuacoesString) {
  const convertendoParaArray = pontuacoesString.split(" ").map(Number);
  let maiorPontuacao = convertendoParaArray[0];
  let menorPontuacao = convertendoParaArray[0];
  let recordesBatidos = 0;
  let numeroPiorJogo = 0;

  for (let i = 1; i < convertendoParaArray.length; i++) {
    if (convertendoParaArray[i] > maiorPontuacao) {
      maiorPontuacao = convertendoParaArray[i];
      recordesBatidos++;
    } else if (convertendoParaArray[i] < menorPontuacao) {
      menorPontuacao = convertendoParaArray[i];
      numeroPiorJogo = i + 1;
    }
  }
  console.log(`Parabéns você bateu seu recorde ${recordesBatidos} vez(es)`);
  console.log(`Seu pior jogo foi o jogo de número: ${numeroPiorJogo}`);
  return [recordesBatidos, numeroPiorJogo];
}

analisarJogos(pontuacoesString);
