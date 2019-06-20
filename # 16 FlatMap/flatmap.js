const escola = [{
    turma: 'M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8
    },{
        nome: 'Rafael',
        nota: 9
    },{
        nome: 'Rebeca',
        nota: 7
    }]
}, {
    turma: 'M2',
    alunos: [{
        nome: 'Matheus',
        nota: 7
    },{
        nome: 'Tiago',
        nota: 4
    }]
}]



const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 =  escola.map(getNotasDaTurma)

console.log(notas1)

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)