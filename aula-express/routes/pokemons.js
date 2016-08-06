var express = require('express');
var router = express.Router();

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const _schema = {
  name:  String,
  attack: Number,
  defense: Number
}
const pokemonSchema = new Schema(_schema)
const PokemonModel = mongoose.model('Pokemon', pokemonSchema)


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(JSON.stringify(
  	[{name:"Suissa", age: 31},{name:"João", age: 24},{name:"José", age: 23},{name:"Maria", age: 22}]
  	));


});


/* GET users/:id . */
router.put('/:id', (req, res, next) => {
  query = {_id: req.paramas.id}
  let mod = req.body
 PokemonModel.update(query, mod, function (err, data) {
        if (err) throw new Error(err)
        res.json(data)
      })
};


/* GET users/:id . */
router.delete('/:id', (req, res, next) => {
  query = {_id: req.paramas.id}
 PokemonModel.remove(query, function (err, data) {
        if (err) throw new Error(err)
        res.json(data)
      })
};

module.exports = router;
// npm start