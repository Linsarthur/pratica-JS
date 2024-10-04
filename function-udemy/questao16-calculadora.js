function calculadora(num1, num2, operador) {
  switch (operador) {
    case (operador = "+"):
      console.log(`${num1}${operador}${num2} = ${num1 + num2} `);
      break;
    case (operador = "-"):
      console.log(`${num1}${operador}${num2} = ${num1 - num2} `);
      break;
    case (operador = "*"):
      console.log(`${num1}${operador}${num2} = ${num1 * num2} `);
      break;
    case (operador = "/"):
      console.log(`${num1}${operador}${num2} = ${num1 / num2} `);
      break;
  }
}

calculadora(10, 10, "/");
