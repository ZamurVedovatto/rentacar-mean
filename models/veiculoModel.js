const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const veiculoSchema = new mongoose.Schema( {
    fabrica: { type: String, required: true },
    modelo: { type: String, required: true },
    placa: { type: String, required: true },
    cor: { type: String, required: true },
    anoFabricacao: { type: Number, required: true },
    valorDiaria: { type: Number },    
    manutencao: { 
        periodo: { 
            inicio: { type: Date },
            fim: { type: Date }
        },
        idOficina: Schema.Types.ObjectId,
        descricao: { type: String },
        valorFinal: { type: Number }
    },    
    aluguel: {
        periodo: { 
            inicio: { type: Date },
            fim: { type: Date }
        },        
        idCliente: Schema.Types.ObjectId,
        valorFinal: { type: Number }
    },    
    seguro: {
        periodo: { 
            inicio: { type: Date },
            fim: { type: Date }
        },
        idSeguradora: Schema.Types.ObjectId,
        valorTotal: { type: Number }
    },
    
    historico_de_alugueis: [ ],
    historico_de_manutencoes: [ ],
    historico_de_seguros: [ ]
    },
    { versionKey: false },
    { collection: 'veiculos' }    
);

const Veiculo = module.exports = mongoose.model('Veiculo', veiculoSchema);

module.exports.getAll = function(callback){
    Veiculo.find(callback);
}

module.exports.add = function(novoVeiculo, callback){
    Veiculo.create(novoVeiculo, callback);
}

module.exports.update = function(id, update, callback){
    Veiculo.findByIdAndUpdate(id, update, {upsert: true}, callback);
    // Veiculo.findOneAndUpdate({'_id': id}, '-__v', update, {upsert:true}, callback);
}

module.exports.delete = function(id, callback){
    Veiculo.findByIdAndRemove(id, callback);
}

module.exports.getOne = function(id, callback){
    Veiculo.findById(id, callback);
}