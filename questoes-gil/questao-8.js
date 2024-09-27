//Verificando se tem vogal na palavra

const palavra = "Arthur".toUpperCase()
let contador = 0
const vogais = ['A', 'E', 'I', 'O', 'U']

for(let i = 0; i < palavra.length; i++){
    if(vogais.includes(palavra[i])){
        contador++
    }
}
console.log(contador);