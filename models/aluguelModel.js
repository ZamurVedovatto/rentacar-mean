const mongoose = require('mongoose');

const aluguelSchema = new mongoose.Schema( {
    idCliente: String,
    idVeiculo: String,
    dataRetirada: String,
    dataEntrega: String
});

const Aluguel = module.exports = mongoose.model('Aluguel', aluguelSchema);

module.exports.getAll = function(callback){
    console.log('Alugueis localizados com sucesso');    
    Aluguel.find(callback);
}

module.exports.add = function(novoAluguel, callback){
    console.log('Aluguel adicionado com sucesso');    
    Aluguel.create(novoAluguel, callback);
}

module.exports.update = function(id, update, callback){
    console.log('Aluguel atualizado com sucesso');    
    Aluguel.findByIdAndUpdate(id, update, callback);
}

module.exports.delete = function(id, callback){
    console.log('Aluguel deletado com sucesso');
    Aluguel.findByIdAndRemove(id, callback);
}

module.exports.getOne = function(id, callback){
    console.log('Aluguel localizado com sucesso');
    Aluguel.findById(id, callback);
}