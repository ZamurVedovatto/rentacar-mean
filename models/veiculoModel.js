const mongoose = require('mongoose');

const veiculoSchema = new mongoose.Schema( {
    fabrica: { type: String, required: true },
    modelo: { type: String, required: true },
    placa: { type: String, required: true },
    cor: { type: String, required: true },
    anoFabricacao: { type: Number, required: true },
    valorDiaria: { type: Number },
    disponivel:  { type: Boolean },
    idSeguro: { type: String },
    manutencoesIds: [ { type: String } ] 
    },
    {
        collection: 'veiculos' 
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