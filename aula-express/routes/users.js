var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(JSON.stringify(
  	[{name:"Suissa", age: 31},{name:"João", age: 24},{name:"José", age: 23},{name:"Maria", age: 22}]
  	));


});

/* GET users/:id . 
router.get('/:id', function(req, res, next) {
  const id = req.paramas.id
  res.send('consulta 1 usuãrio pelo seu id = ${id}')
});*/

module.exports = router;
// npm start