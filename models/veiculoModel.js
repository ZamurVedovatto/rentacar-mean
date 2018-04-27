const mongoose = require('mongoose');

const veiculoSchema = new mongoose.Schema( {
    fabrica: String,
    modelo: String,
    placa: String,
    cor: String,
    anoFabricacao: Number,
    valorDiaria: Number,
    disponivel: Boolean,
    manutencao: []
});

const Veiculo = module.exports = mongoose.model('Veiculo', veiculoSchema);

module.exports.getAll = function(callback){
    Veiculo.find(callback);
}

module.exports.add = function(novoVeiculo, callback){
    Veiculo.create(novoVeiculo, callback);
}

module.exports.update = function(id, update, callback){
    Veiculo.findByIdAndUpdate(id, update, callback);
}

module.exports.delete = function(id, callback){
    Veiculo.findByIdAndRemove(id, callback);
}

module.exports.getOne = function(id, callback){
    Veiculo.findById(id, callback);
}