const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema( {
    fullName: String,
    email: String
});

const Cliente = module.exports = mongoose.model('Cliente', clienteSchema);

module.exports.getAll = function(callback){
    console.log('Clientes localizados com sucesso');    
    Cliente.find(callback);
}

module.exports.add = function(novoCliente, callback){
    console.log('Cliente adicionado com sucesso');    
    Cliente.create(novoCliente, callback);
}

module.exports.update = function(id, update, callback){
    console.log('Cliente atualizado com sucesso');    
    Cliente.findByIdAndUpdate(id, update, callback);
}

module.exports.delete = function(id, callback){
    console.log('Cliente deletado com sucesso');
    Cliente.findByIdAndRemove(id, callback);
}

module.exports.getOne = function(id, callback){
    console.log('Cliente localizado com sucesso');
    Cliente.findById(id, callback);
}