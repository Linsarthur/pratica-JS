/*
Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
*/

function diaDaSemana(dia) {
  switch (dia) {
    case 1:
      dia = "Domingo";
      console.log(`${dia} é o primeiro dia da Semana`);
      break;
    case 2:
      dia = "Segunda";
      console.log(`${dia} é o segundo dia da Semana`);
      break;
    case 3:
      dia = "Terça";
      console.log(`${dia} é o terceiro dia da Semana`);
      break;
    case 4:
      dia = "Quarta";
      console.log(`${dia} é o quarto dia da Semana`);
      break;
    case 5:
      dia = "Quinta";
      console.log(`${dia} é o quinto dia da Semana`);
      break;
    case 6:
      dia = "Sexta";
      console.log(`${dia} é o sexto dia da Semana`);
      break;
    case 7:
      dia = "Sabado";
      console.log(`${dia} é o setimo dia da Semana`);
      break;
    default:
      console.log("Dia inválido");
  }
}

diaDaSemana(1);
diaDaSemana(2);
diaDaSemana(3);
diaDaSemana(4);
diaDaSemana(5);
diaDaSemana(6);
diaDaSemana(7);
diaDaSemana(8);
diaDaSemana(-1);
