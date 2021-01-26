const express = require('express')
const app = express()

let lista = [{objeto:"leite"}] // lista fica em cinza// toda vez que for um array eh um colchetes.

//app get e app post. 
// o app use roda independente do que a pessoa pedir
app.use(express.json())

app.get("/",(request,response)=> {
    //response = console.log("ok")
    //response.message("ok") 
    console.log("ok")
    response.json(lista)
    // quero que responde no console

})


app.post("/",(request,response)=> {
        
    let dados = request.body
    lista.push(dados)
    console.log(dados)
    console.log("dados gravados com sucesso mostrando no console")
    response.json({nome:"dados gravados com sucesso no banco de dados"})
    console.log(lista)
})



//app.listen(5000, function(){ console.log("rodando")})   //vai deixar em modo de escuta, rodando constantemente


// node.js roda o arquivo

// construir as coisas na sequencia

app.listen(5000, () => { console.log("rodando")})   //vai deixar em modo de escuta, rodando constantemente


//#npm i nodemon // nao precisa ficar reiniciando o pc
