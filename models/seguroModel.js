const mongoose = require('mongoose');

const seguroSchema = new mongoose.Schema( {
    idVeiculo: { type: String, required: true },
    seguradora: { type: String, required: true },
    valorMensal: { type: Number },
    dataInicioContrato: { type: Date },
    dataFimContrato: { type: Date }
    },
    { 
        collection: 'seguros'
    });

const Seguro = module.exports = mongoose.model('Seguro', seguroSchema);

module.exports.getAll = function(callback){
    Seguro.find(callback);
}

module.exports.add = function(novoSeguro, callback){
    Seguro.create(novoSeguro, callback);
}

module.exports.update = function(id, update, callback){
    Seguro.findByIdAndUpdate(id, update, callback);
}

module.exports.delete = function(id, callback){
    Seguro.findByIdAndRemove(id, callback);
}

module.exports.getOne = function(id, callback){
    Seguro.findById(id, callback);
}