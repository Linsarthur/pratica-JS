function mininoCedula(valor) {
  const cedulas = [100, 50, 10, 5, 1];
  const resultado = {};

  for (let cedula of cedulas) {
    if (valor >= cedula) {
      const quantidade = Math.floor(valor / cedula);
      valor -= quantidade * cedula;
      resultado[cedula] = quantidade;
    }
  }
  for (let [cedula, quantidade] of Object.entries(resultado)) {
    console.log(`${quantidade} nota(s) de R$ ${cedula}`);
  }
}

mininoCedula(18);
