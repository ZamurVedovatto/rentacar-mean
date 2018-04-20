const mongoose = require('mongoose');

const seguroSchema = new mongoose.Schema( {
    seguradora: String    
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