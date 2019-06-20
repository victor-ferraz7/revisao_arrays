const alunos = [
    
       { nome: "João", nota: 10, bolsista: true },
       { nome: 'Tiago', nota: 8, bolsista: false },
       { nome: "Maria", nota: 9, bolsista: false },
       { nome: "Zenilda", nota: 8.5, bolsista: true},
       { nome: 'Anderson', nota: 7, bolsista: false },
       { nome: 'Riquelme', nota: 3, bolsista: false },
    
]

console.log(alunos.map(alu => alu.nota))

const resultado = alunos.map(alu => alu.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
}, 100) // valor inicial pode ser passado após a Callback

console.log(resultado)