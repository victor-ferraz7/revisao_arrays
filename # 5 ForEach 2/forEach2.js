// Implementação do forEach : Como ele funciona ?

Array.prototype.forEach2 = function(callback){
    for (i = 0; i < this.length ; i++){
        callback(this[i], i, this)
    }
}

// ....................................................

const chamada = ['Agata','Aldo','Ronaldo','Ronagata','Celso','Cezar','Moacir','Cassio']
chamada.sort()

chamada.forEach2((nome,indice,array) =>{
    console.log(`Aluno ${nome} Nº ${indice + 1}`)
    console.log(array)
})