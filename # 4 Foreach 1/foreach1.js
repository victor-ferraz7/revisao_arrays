const aprovados = ['Agata','Aldo','Ronaldo','Ronagata','Celso','Cezar','Moacir','Cassio']
 
// aprovados.forEach(function(nome, indice){
//      console.log(`${indice + 1}º ${nome}`)
// })

var app = aprovados.slice(1,6)

//app.forEach(nome => console.log(nome)) // nesse caso só conta o 1º parâmetro (valor do elemento) -> serão dados os nomes e não os índices

const mostrarAprovados = aprovado => console.log(aprovado)

app.forEach(mostrarAprovados)