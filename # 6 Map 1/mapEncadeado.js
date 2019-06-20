const nums = [1,2,3,4,5,6,7,8]

const m7 = elemento => elemento * 7
const s4 = e => e + 4
const grana = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

const resultado = nums.map(m7).map(s4).map(grana)

console.log(resultado)