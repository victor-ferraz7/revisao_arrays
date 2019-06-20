const quaseArray = {
    0: "Ricardo",
    1: "Rafael",
    2: "Ana",
    3: 'Tiago',
}

//console.log(quaseArray)

Object.defineProperty(quaseArray, 'toString', {
    value: function(){
                return Object.values(this)
            },
    enumerable: false
})

const arrayarray = ['Ricardo','Rafael','Ana','Tiago']

console.log(quaseArray.toString(), arrayarray)