function operacoesMatematicas(a, b){
    const soma = a + b
    const sub = a - b
    const div = a / b
    const mult = a * b
    return console.log(`A soma é: ${soma}\nA subtração é: ${sub}\nA divisão é: ${div.toFixed(2)}\nE a multiplicação é: ${mult}`);
    

}
operacoesMatematicas(1,2)
operacoesMatematicas(10,10)