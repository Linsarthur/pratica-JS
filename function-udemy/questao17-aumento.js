//Aumento de acordo com o plano.
function planoDeTrabalho(plano, salario) {
  const aumentoDe10 = salario + salario * 0.1;
  const aumentoDe15 = salario + salario * 0.15;
  const aumentoDe20 = salario + salario * 0.2;
  const varPLano = "A" || "B" || "C";
  switch (plano) {
    case (plano = varPLano):
      //aumento de 10%
      console.log(
        `Seu plano de aumento é o ${plano}, seu novo salário será ${aumentoDe10}`
      );
      break;
    case (plano = "B"):
      console.log(
        `Seu plano de aumento é o ${plano}, seu novo salário será ${aumentoDe15}`
      );
      break;
    case (plano = "C"):
      console.log(
        `Seu plano de aumento é o ${plano}, seu novo salário será ${aumentoDe20}`
      );
      break;
    default:
      console.log("Plano não encontrado em nossos dados.");
  }
}

planoDeTrabalho("c", 20);
