const carrinho = [
    '{ "nome": "Borracha", "preço": 3.45 }',
    '{ "nome": "Caderno", "preço": 13.90 }',
    '{ "nome": "Kit de Lapis", "preço": 41.22 }',
    '{ "nome": "Caneta", "preço": 7.50 }'
]


const pObj = json => JSON.parse(json)
const soProduto = produto => produto.preço

const resultado = carrinho.map(pObj).map(soProduto)

console.log(resultado)