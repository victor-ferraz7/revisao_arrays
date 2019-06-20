let aprovados = ['Bia','Carlos','Tiago']

//console.log(aprovados[1])

aprovados[3] = 'Victor' // insere diretamente no índice informado, mais comum para substituir elemento já existente
aprovados.push('Zé') // Método de inserção no ultimo elemento do array

//console.log(aprovados)
aprovados[8] = 'Kyra'
aprovados.sort()

delete aprovados[3]
console.log(aprovados)