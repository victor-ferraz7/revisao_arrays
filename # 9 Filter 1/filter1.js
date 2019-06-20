const produtos = [
    {nome: 'Notebook', preco: 2501, fragil: true},
    {nome: 'Ipad Pro', preco: 3000, fragil: true},
    {nome: 'Taça de vidro', preco: 400, fragil: true},
    {nome: 'bola nike', preco: 150, fragil: false}
]

 const frageis = produtos.filter((produtos) =>{ // estrutura 
     if(produtos.fragil == true){
         return true
     }
     else{
         return false
     }
 })

 const caros = produtos.filter(p => p.preco > 500 ? true: false)  // operador ternário

 console.log(frageis)
 console.log(caros)


 // Estrutura optimizada

 const caro = produto => produto.preco >= 100 // irá retornar true automaticamente
 const fragil = produto => produto.fragil // elemento já tem em sua composição true ou false

 console.log(produtos.filter(caro).filter(fragil))
