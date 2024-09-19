//Imprimindo todos as chaves e valores

const alunos = [
    { nome: "João", idade: 20, curso: "Engenharia" },
    { nome: "Maria", idade: 22, curso: "Medicina" },
    { nome: "Carlos", idade: 19, curso: "Direito" },
    { nome: "Ana", idade: 21, curso: "Arquitetura" }
];



for(let i = 0; i < alunos.length; i++){
    for(let props in alunos[i]){
        console.log(`${props}: ${alunos[i][props]}`)
    }
    console.log('------------')
  }


