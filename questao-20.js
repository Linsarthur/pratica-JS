//Escreva um loop que remova todos os elementos duplicados de um array.

const lista = ["a","b","c","d","a","e"];
let novaLista
for(let i = 0; i < lista.length; i++){
    novaLista = removendoDuplicados = Array.from(new Set(lista))

}

console.log(novaLista);
