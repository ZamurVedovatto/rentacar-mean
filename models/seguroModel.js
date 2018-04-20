const mongoose = require('mongoose');

const seguroSchema = new mongoose.Schema( {
    seguradora: String    
});

const Seguro = module.exports = mongoose.model('Seguro', seguroSchema);

module.exports.getAll = function(callback){
    console.log('Seguros localizados com sucesso');    
    Seguro.find(callback);
}

module.exports.add = function(novoSeguro, callback){
    console.log('Seguro adicionado com sucesso');    
    Seguro.create(novoSeguro, callback);
}

module.exports.update = function(id, update, callback){
    console.log('Seguro atualizado com sucesso');    
    Seguro.findByIdAndUpdate(id, update, callback);
}

module.exports.delete = function(id, callback){
    console.log('Seguro deletado com sucesso');
    Seguro.findByIdAndRemove(id, callback);
}

module.exports.getOne = function(id, callback){
    console.log('Seguro localizado com sucesso');
    Seguro.findById(id, callback);
}