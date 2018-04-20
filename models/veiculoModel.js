const mongoose = require('mongoose');

const veiculoSchema = new mongoose.Schema( {
    fabrica: String,
    modelo: String,
    placa: String,
    cor: String,
    anoFabricacao: Number,
    valorDiaria: Number,
    disponivel: Boolean
});

const Veiculo = module.exports = mongoose.model('Veiculo', veiculoSchema);

module.exports.getAll = function(callback){
    console.log('Veiculos localizados com sucesso');    
    Veiculo.find(callback);
}

module.exports.add = function(novoVeiculo, callback){
    console.log('Veiculo adicionado com sucesso');    
    Veiculo.create(novoVeiculo, callback);
}

module.exports.update = function(id, update, callback){
    console.log('Veiculo atualizado com sucesso');    
    Veiculo.findByIdAndUpdate(id, update, callback);
}

module.exports.delete = function(id, callback){
    console.log('Veiculo deletado com sucesso');
    Veiculo.findByIdAndRemove(id, callback);
}

module.exports.getOne = function(id, callback){
    console.log('Veiculo localizado com sucesso');
    Veiculo.findById(id, callback);
}