const express = require('express');
const router = express.Router();
const Veiculo = require('../models/veiculoModel');

//get all veiculos
router.get('/', (req, res) => {

    Veiculo.getAll((err, veiculos) => {
        if (err) throw err;
        res.json(veiculos);
    });

});

//create veiculo
router.post('/', (req, res) => {

    let hAlugueis;
    if (req.body.historico_de_alugueis.length > 0)
        hAlugueis = req.body.historico_de_alugueis;      
    else
        hAlugueis = [];

    let hManutencoes;
    if (req.body.historico_de_manutencoes.length > 0)
        hManutencoes = req.body.historico_de_manutencoes;      
    else
        hManutencoes = [];

    let hSeguros;
    if (req.body.historico_de_seguros.length > 0)
        hSeguros = req.body.historico_de_seguros;
    else
        hSeguros = [];    

    let novoVeiculo = {
        fabrica: req.body.fabrica,
        modelo: req.body.modelo,
        placa: req.body.placa,
        cor: req.body.cor,
        anoFabricacao: req.body.anoFabricacao,
        valorDiaria: req.body.valorDiaria,   
        manutencao: { 
            periodo: { 
                inicio: req.body.manutencao_periodo_inicio,
                fim: req.body.manutencao_periodo_fim
            },
            idOficina: req.body.manutencao_idOficina,
            descricao: req.body.manutencao_descricao,
            valorFinal: req.body.manutencao_valorFinal
        },    
        aluguel: {
            periodo: { 
                inicio: req.body.aluguel_periodo_inicio,
                fim: req.body.aluguel_periodo_fim
            },        
            idCliente: req.body.aluguel_idCliente,
            valorFinal: req.body.aluguel_valorFinal
        },    
        seguro: {
            periodo: { 
                inicio: req.body.seguro_periodo_inicio,
                fim: req.body.seguro_periodo_fim
            },
            idSeguradora: req.body.seguro_idSeguradora,
            valorTotal: req.body.seguro_valorTotal
        },
        historico_de_alugueis: hAlugueis,
        historico_de_manutencoes: hManutencoes,
        historico_de_seguros: hSeguros
    }

    Veiculo.add(novoVeiculo, (err, veiculo) => {
        if (err) throw err;
        res.json(veiculo);
    });
    
});


//update veiculo
router.put('/:_id', (req, res) => {

    /*
    let update = {
        fabrica: req.body.fabrica,
        modelo: req.body.modelo,
        placa: req.body.placa,
        cor: req.body.cor,
        anoFabricacao: req.body.anoFabricacao,
        valorDiaria: req.body.valorDiaria
    }

    Veiculo.update(req.params._id, update, (err, update) => {
        if (err) throw err;
        res.json(update);
    });

    */
   let update = req.body;

    Veiculo.update(req.params._id, update, (err, update) => {
        if (err) throw err;
        else {
            res.json(update);
        }
    });
});


//deletar veiculo
router.delete('/:_id', (req, res) => {

    Veiculo.delete(req.params._id, (err, veiculo) => {
        if (err) throw err;
        res.json(veiculo);
    });
    
});


//encontrar um veiculo
router.get('/:_id', (req, res) => {

    Veiculo.getOne(req.params._id, (err, veiculo) => {
        if (err) throw err;
        res.json(veiculo);
    });
    
});


module.exports = router;
