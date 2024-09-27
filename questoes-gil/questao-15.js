//Criação de um Array com Números Ímpares de 1 a 20
const arr = []
let cont = 0
for(let i = 0; i < 20 ; i++){
    cont++
    arr.push(cont)
    if(arr[i] % 2 === 1){
        console.log(cont);
    }
}