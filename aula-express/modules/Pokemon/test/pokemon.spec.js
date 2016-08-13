require('./../../../db/config.test')

const assert = require('assert');
const Controller = require('./../controller')


describe('Pokemon Controller', () => {
    
    before((done) => {
        Controller.remove({}, (err, data) => done())
    })

    var msg1 = 'Quando iniciamos sem pokemons a lista deve vir vazia'
    describe(msg1,()=>{
        it('Deve retornar um array vazio', (done) =>{
            var query = {}
            var callback = (err,data) =>{
                console.log('data',data)
                assert.equal(null, err, 'Erro não é nulo')
                
                assert.equal(0, data.length, 'Lista não veio vazia')
                done()
            }
            Controller.find(query, callback)
        })
    })

    describe('CREATE',()=>{
        it('No CREATE o retorno deve ser o mesmo objeto enviado, adicionado _id', (done) =>{
            var mod = {
                name:'TESTE',
                attack: 9001,
                defebse:8001
            }
            var callback = (err,data) =>{
                //console.log('data._id',typeof data._id)
                assert.equal('object', typeof data._id)
                done()
            }
            Controller.create(mod, callback)
        })
    })

    describe('UPDATE',()=>{
        it('No UPDATE o retorno deve ser o mesmo objeto enviado, adicionado _id', (done) =>{
            var mod = {
                name:'TESTEsSS',
                attack: 90013,
                defebse:80013
            }
            var callback = (err,data) =>{
                //console.log('data._id',typeof data._id)
                assert.equal(1, data.ok)
                done()
            }
            Controller.update(mod, callback)
        })

    })

})