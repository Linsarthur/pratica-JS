let alunos = []

function criarAluno(nome, idade, serie){
        const adicionarAluno = {
            id: alunos.length,
            nome,
            idade,
            serie
        }
        alunos.push(adicionarAluno)
}
criarAluno('Arthur', 23, 'Formado')
criarAluno('Levy', 22, 'Ultimo semestre')
criarAluno('João', 21, 'Primeiro semestre')
criarAluno('José', 20, 'Não estuda')
// console.log(alunos);

function lerAlunos(){
    return alunos
}

console.log(lerAlunos());


function atualizarAluno(id, nome, idade, serie){
    const alunoEspecifico = lerAlunos().find((aluno) => {
        return aluno.id === id
    })
    alunoEspecifico.nome = nome
    alunoEspecifico.idade = idade
    alunoEspecifico.serie = serie
}
atualizarAluno(1 ,'Jhonatan', 18, '3A')
// console.log(alunos);


function deletarAluno(id){
    const alunoDeletado = lerAlunos().find((aluno) => {
        return aluno.id === id
    })
    alunos.splice(alunoDeletado, 1)
}

deletarAluno(2)
console.log(alunos);
