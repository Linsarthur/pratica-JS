function verificarTriangulo(a, b, c) {
  if (a === b && b === c) {
    console.log("Triangulo Equilátero");
  } else if (a === b && b !== c) {
    console.log("Triangulo Isósceles");
  } else if (a !== b && b !== c) {
    console.log("Triangulo Escaleno");
  }

  return verificarTriangulo;
}

verificarTriangulo(10, 12, 11);
