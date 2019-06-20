const alunos = [
    {nome: "João" , nota: 5.5},
    {nome: "Maria", nota: 8}
]

// Imperativa

let total1 = 0

for (i = 0; i < alunos.length; i++){
    total1 += alunos[i].nota
}

console.log(total1 / alunos.length)

// Declarativa

const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)

console.log(total2/alunos.length)