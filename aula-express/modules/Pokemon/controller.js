'use strict';
const PokemonModel = require('./model')

const Model = require('./model');
const Controller = {
    create:function(data, callback){
        Model.create(data,callback);
    },
    find:function(query, callback){
        Model.find(query,callback);
    },
    remove:function(query, callback){
        Model.remove(query,callback);
    },
    update:function(query, mode, callback){
        Model.update(query,mode, callback);
    },
}

module.exports = Controller