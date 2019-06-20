const pilotos = ['Vettel','Massa','Alonso','Raikkonen','Rubinho']

pilotos.pop() // remove o ultimo elemento do Array
// console.log(pilotos)

pilotos.push('Verstappen')
// console.log(pilotos)

pilotos.shift() // remove o primeiro elemento do array
// console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona um elemento na posição de índice 0 do array
//console.log(pilotos)

const p2 = pilotos.slice()
//console.log(p2)

const p3 = pilotos.slice(3)
//console.log(p3)

const p4 = pilotos.slice(0,4) // o elemento do índice de parada (4) entrará no novo array gerado
console.log(p4)