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
let query = {};

 switch ('/alterar') {
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
    query = {};

    PokemonModel.find(query, function (err, data) {
      if (err) return console.log('ERRO: ', err);
      return console.log('Buscou:', data);
    })
    break;
  case '/alterar':
    query = { name: /suissamon/i}
    const mod = {attack: 9001}
    const options = {
      multi: true,
      upsert: true
    }

    PokemonModel.update(query, mod, (err, data) => {
      if (err) return console.log('ERRO: ', err)
      return console.log('Buscou:', data)
})
    break;
    case '/deletar':
    //response.write(JSON.stringify(listagem))
    break;exit
    default:
    console.log('Deu Ruim!')
    break;
 }
