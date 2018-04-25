const mongoose = require('mongoose');

const manutencaoSchema = new mongoose.Schema( {
    idVeiculo: String,
    dataInicio: String,
    dataFim: String
});

const Manutencao = module.exports = mongoose.model('Manutencao', manutencaoSchema);

module.exports.getAll = function(callback){
    Manutencao.find(callback);
}

module.exports.add = function(novaManutencao, callback){
    Manutencao.create(novaManutencao, callback);
}

module.exports.update = function(id, update, callback){
    Manutencao.findByIdAndUpdate(id, update, callback);
}

module.exports.delete = function(id, callback){
    Manutencao.findByIdAndRemove(id, callback);
}

module.exports.getOne = function(id, callback){
    Manutencao.findById(id, callback);
}