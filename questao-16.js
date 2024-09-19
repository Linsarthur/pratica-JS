//Escreva um loop que percorra um array de objetos e imprima uma propriedade específica de cada objeto.
const alunos = [
    { nome: "João", idade: 20, curso: "Engenharia" },
    { nome: "Maria", idade: 22, curso: "Medicina" },
    { nome: "Carlos", idade: 19, curso: "Direito" },
    { nome: "Ana", idade: 21, curso: "Arquitetura" }
];


for(let i = 0; i < alunos.length; i++){
  console.log(alunos[i].nome)
}



