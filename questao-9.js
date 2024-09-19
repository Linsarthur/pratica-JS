//inversão de string

const palavra = 'Teste'
let palavraInvertida = ''
for(let i = palavra.length - 1; i>=0 ;i--){
    palavraInvertida += palavra[i]
}
console.log(palavraInvertida)