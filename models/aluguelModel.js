const mongoose = require('mongoose');

const aluguelSchema = new mongoose.Schema( {
    Cliente: String,
    Veiculo: String,
    dataRetirada: Date,
    dataEntrega: Date
});

const Aluguel = module.exports = mongoose.model('Aluguel', aluguelSchema);

module.exports.getAll = function(callback){
    Aluguel.find(callback);
}

module.exports.add = function(novoAluguel, callback){
    Aluguel.create(novoAluguel, callback);
}

module.exports.update = function(id, update, callback){
    Aluguel.findByIdAndUpdate(id, update, callback);
}

module.exports.delete = function(id, callback){
    Aluguel.findByIdAndRemove(id, callback);
}

module.exports.getOne = function(id, callback){
    Aluguel.findById(id, callback);
}