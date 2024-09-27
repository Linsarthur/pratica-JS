//Desenvolver um algoritmo que leia um número não determinado de valores e calcule e escreva a média aritmética dos valores lidos, a quantidade de valores positivos, a quantidade de valores negativos e o percentual de valores negativos e positivos.

const arr = []
let soma = 0
let positivos = 0
let negativos = 0

for (let i = -23; i <= 15; i++) {
    arr.push(i)
}

soma = arr.reduce((acumulador, atual) => acumulador + atual, 0)


arr.forEach(num => {
    if (num > 0) {
        positivos++
    } else if (num < 0) {
        negativos++
    }
})

let media = soma / arr.length
const totalDeValores = arr.length
const porcentagemPositivos = (positivos / totalDeValores) * 100
const porcentagemNegativos = (negativos / totalDeValores) * 100

console.log(`Lista de números ${arr}.
    A soma total ${soma}.
    A media é ${media.toFixed(2)}.
    Números positivos: ${positivos}. 
    Números negativos: ${negativos}.
    A porcentagem de valores positivos é ${porcentagemPositivos.toFixed(2)}.
    A porcentagem de valores negativos é ${porcentagemNegativos.toFixed(2)}`);

