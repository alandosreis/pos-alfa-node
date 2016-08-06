const http = require("http")

http.createServer((request, response) => {
  response.writeHead(200, {"Content-Type": "application/json;charset=utf-8"})

  const url = request.url
  console.log('url', url)

require('./config')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _schema = {
  name:  String,
  atack: Number,
  defense: Number
}
const pokemonSchema = new Schema(_schema);
const PokemonModel = mongoose.model('Pokemon', pokemonSchema);

 switch (url) {
 	case '/criar':
  	const Suissamon = new PokemonModel({ name: 'Suissamon' });
    // Suissamon.save(function (err, data) {
    //   if (err) return console.log('ERRO: ', err);
    //   return console.log('Inseriu:', data);
    // });
    // ou
    PokemonModel.create({ name: 'Suissamon' }, function (err, data) {
      if (err) return console.log('ERRO: ', err);
      return console.log('Inseriu:', data);
    }); 
  	break;
  case '/listar':
  	const query ={}

    PokemonModel.find(query, function (err, data) {
      if (err) return console.log('ERRO: ', err);
      return console.log('Buscou:', data);
    })
  	break;
  case '/alterar':
  	/*const query = { name: /suissamon/i}
    const mod = {attack: 9001}
    const options = {
      multi: true,
      upsert: true
    }*/

    PokemonModel.update(query, mod, (err, data) => {
      if (err) return console.log('ERRO: ', err)
      return console.log('Buscou:', data)
})
  	break;
  	case '/deletar':
  	response.write(JSON.stringify(listagem))
  	break;
  	default:
  	response.end('Rota não encontrada')
  	break;
 }



  response.write('Hello World')

  response.end()
})
.listen(3000)
console.log('Server running at http://localhost:3000/')
