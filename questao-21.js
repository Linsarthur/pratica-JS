//Soma de números impares multiplos de 3 no range de 1 a 500

let arr = []
let somaImpares = 0
for(let i = 1; i <= 500; i++){
    arr.push(i)
    
}
for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 1 && arr[i] % 3 === 0){
        somaImpares+=arr[i]
    }
}
console.log(somaImpares);
