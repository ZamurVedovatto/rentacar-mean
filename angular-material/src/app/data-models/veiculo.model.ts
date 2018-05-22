import mongoose = require('mongoose');

export class Veiculo {
    fabrica: String;
    modelo: String;
    placa: String;
    cor: String;
    anoFabricacao: Number;
    valorDiaria?: Number;
    manutencao: {
        periodo: {
            inicio: Date;
            fim: Date;
        };
        idOficina: mongoose.Schema.ObjectId;
        descricao: String;
        valorFinal: Number;
    };
    aluguel: {
        periodo: {
            inicio: Date;
            fim: Date;
        };
        idCliente: mongoose.Schema.ObjectId;
        valorFinal: Number;
    };
    seguro: {
        periodo: {
            inicio: Date;
            fim: Date;
        };
        idSeguradora: mongoose.Schema.ObjectId;
        valorTotal: Number;
    };

    historico_de_alugueis: String[ ];
    historico_de_manutencoes: String[ ];
    historico_de_seguros: String[ ];
}
