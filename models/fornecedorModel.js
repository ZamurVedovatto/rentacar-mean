const mongoose = require('mongoose');

//usado para Seguradora e Oficina Mecânica
const fornecedorSchema = new mongoose.Schema( {
    tipo: { type: String, required: true},
    nomeFantasia: { type: String, required: true },
    email: { type: String, required: true },
    endereco: {
        logradouro: String,
        numero: Number,
        cidade: String,
        cep: String
    },
    fixo: String
    },
    { 
        collection: 'fornecedores'
    });

const Fornecedor = module.exports = mongoose.model('Fornecedor', fornecedorSchema);

module.exports.getAll = function(callback){
    Fornecedor.find(callback);
}

module.exports.add = function(novoFornecedor, callback){
    Fornecedor.create(novoFornecedor, callback);
}

module.exports.update = function(id, update, callback){
    Fornecedor.findByIdAndUpdate(id, update, callback);
}

module.exports.delete = function(id, callback){
    Fornecedor.findByIdAndRemove(id, callback);
}

module.exports.getOne = function(id, callback){
    Fornecedor.findById(id, callback);
}