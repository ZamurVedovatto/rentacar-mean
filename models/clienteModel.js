const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema( {
    fullName: String,
    email: String
});

const Cliente = module.exports = mongoose.model('Cliente', clienteSchema);

module.exports.getAll = function(callback){
    Cliente.find(callback);
}

module.exports.add = function(novoCliente, callback){
    Cliente.create(novoCliente, callback);
}

module.exports.update = function(id, update, callback){
    Cliente.findByIdAndUpdate(id, update, callback);
}

module.exports.delete = function(id, callback){
    Cliente.findByIdAndRemove(id, callback);
}

module.exports.getOne = function(id, callback){
    Cliente.findById(id, callback);
}