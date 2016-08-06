const http = require("http")

// CABEÇALHO
require('./config')
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const _schema = {
  name:  String,
  attack: Number,
  defense: Number
}
const pokemonSchema = new Schema(_schema)
const PokemonModel = mongoose.model('Pokemon', pokemonSchema)
// FIM CABEÇALHO

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "application/json;charset=utf-8"})

  const url = request.url
  console.log('url', url)

  let listagem = [
    {name: "Suissa", age: 31},
    {name: "João", age: 24},
    {name: "José", age: 23},
    {name: "Maria", age: 22}
  ]
  let query = {}
  switch (url) {
    case '/criar':
      PokemonModel.create({ name: 'TESTE' }, (err, data) => {
        if (err) return console.log('ERRO: ', err);


        response.end(JSON.stringify(data))
      });
      break;
    case '/listar':
      PokemonModel.find({}, (err, data) => {
        if (err) return console.log('ERRO: ', err)
        response.end(JSON.stringify(data))
      })
      break;
    case '/alterar':
      query = { name: /teste/i}
      let mod = {attack: 9001}

      PokemonModel.update(query, mod, (err, data) => {
        if (err) return console.log('ERRO: ', err)
        response.end(JSON.stringify(data))
      })
      break;
    case '/deletar':
      query = { name: /suissamon/i}
      PokemonModel.remove(query, (err, data) => {
        if (err) return console.log('ERRO: ', err)
        response.end(JSON.stringify(data))
      })
      break;
    default:
      response.end('Rota não encontrada')
      break;
  }
// 
  // response.end('Fechando')
}).listen(3000)
console.log('Server running at http://localhost:3000/');


//postman launcher