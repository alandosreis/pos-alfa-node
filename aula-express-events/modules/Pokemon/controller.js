'use strict'

const Model = require('./model')

const CONTROLLER = {
    create: (data, callback) => {
        const model = new Model(data)
        model.save(callback)
        let cd = (err, res) =>{
            if(err) thwor new error(err)
                res.json(data)
            }
            
    },
    find: (query, callback) => {
        Model.find(query, callback)
    },
    update: (query, mod, options) => {
        options = options || {}
        Model.update(query, mod, options, function(err, data) {
            if (err) {
                return console.log('ERRO: ', err)
            }
            return console.log('Alterou:', data)
        })
    },
    delete: (query, callback) => {
        Model.remove(query, callback)
    },
}

module.exports = CONTROLLER
