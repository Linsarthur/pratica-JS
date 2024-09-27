//Convertendo temperaturadas.

const grausC = 28
const grausF = 83

const conversaoParaFahrenheit = (grausC * 1.8) + 32
const conversaoParaCelsius = (grausF - 32) / 1.8

console.log(Math.floor(conversaoParaCelsius));
console.log(Math.ceil(conversaoParaFahrenheit));
