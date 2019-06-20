// Implementação do Filter : Como  ele funciona ?

Array.prototype.filter2 = function(callback){
    const newArray = []

    for(i = 0; i < this.length; i++){
        if (callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}

//..................................................

const produtos = [
    {nome: 'Notebook', preco: 2501, fragil: false},
    {nome: 'Ipad Pro', preco: 3000, fragil: true},
    {nome: 'Taça de vidro', preco: 400, fragil: true},
    {nome: 'bola nike', preco: 150, fragil: false}
]

const filtro = p => p.preco > 100 && p.fragil

console.log(produtos.filter2(filtro))