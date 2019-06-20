// Implementação do .map() : como ele funciona ?

Array.prototype.map2 = function(callback){
   const newArray = []

   for(i = 0; i < this.length; i++){
       newArray.push(callback(this[i], i, this))
   }
   return newArray
}

// ..........................................

const carrinho = [
    '{ "nome": "Borracha", "preço": 3.45 }',
    '{ "nome": "Caderno", "preço": 13.90 }',
    '{ "nome": "Kit de Lapis", "preço": 41.22 }',
    '{ "nome": "Caneta", "preço": 7.50 }'
]


const pObj = json => JSON.parse(json)
const soProduto = produto => produto.preço

const resultado = carrinho.map2(pObj).map2(soProduto)

console.log(resultado)