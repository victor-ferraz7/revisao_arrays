const fonte = [1,2,3,4,5,6,7,8,9]

const alt1 = fonte.map((elemento) => elemento * 3)


const alt2 = alt1.map((e) =>{
    return e + 2
})

const alt3 = alt2.map(function(ele){
    return ele * 2
})

console.log(fonte, alt1, alt2,alt3)