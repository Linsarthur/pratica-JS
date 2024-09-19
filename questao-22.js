//Ler maior e menor altura de uma lista

const alturasEmMetros = [1.75, 1.55, 1.60, 1.65, 1.70,1.50 , 1.80, 1.85, 1.90, 1.95, 2.20, 2.05, 2.10, 2.15, 2.00];

Array.min = function(array){
    return Math.min.apply(Math, array)
}

Array.max = function(array){
    return Math.max.apply(Math, array)
}

console.log(Array.min(alturasEmMetros));
console.log(Array.max(alturasEmMetros));