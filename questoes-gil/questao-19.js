// Escreva um loop que verifique se um número específico está presente em um array.

const arr = [33, 55, 32, 75, 15, 63, 78, 12]
let exist
for(let i = 0; i < arr.length; i++){
   exist = arr.find((item) => item === 55)
}
console.log(exist);
