const alunos = [
    
   { nome: "João", nota: 10, bolsista: true },
   { nome: 'Tiago', nota: 8, bolsista: false },
   { nome: "Maria", nota: 9, bolsista: false },
   { nome: "Zenilda", nota: 8.5, bolsista: true},
   { nome: 'Anderson', nota: 7, bolsista: false },
    { nome: 'Riquelme', nota: 3, bolsista: false },
 
]

// Desafio 1 : Todos alunos são bolsistas?

const todosBolsistas = (resultado,bolsista) => resultado && bolsista
console.log(alunos.map(aluno => aluno.bolsista).reduce(todosBolsistas))

//Desafio 2: Algum Bolsista ?

const algumBolsista = (resultado,bolsista) => resultado || bolsista 
console.log(alunos.map(aluno => aluno.bolsista).reduce(algumBolsista))