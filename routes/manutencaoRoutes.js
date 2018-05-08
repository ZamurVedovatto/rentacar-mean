const express = require('express');
const router = express.Router();
const Manutencao = require('../models/manutencaoModel');

//get all
router.get('/', (req, res) => {

    Manutencao.getAll((err, manutencoes) => {
        if (err) throw err;
        res.json(manutencoes);
    });

});

//create
router.post('/', (req, res) => {

    let novaManutencao = {
        idVeiculo: req.body.idVeiculo,
        dataInicio: req.body.dataInicio,
        dataFim: req.body.dataFim,
        valorFinal: req.body.valorFinal
    }

    Manutencao.add(novaManutencao, (err, manutencao) => {
        if (err) throw err;
        res.json(manutencao);
    });    
});


//update
router.put('/:_id', (req, res) => {

    let update = {
        veiculo: req.body.idVeiculo,
        dataInicio: req.body.dataInicio,
        dataFim: req.body.dataFim,
        valorFinal: req.body.valorFinal
    }

    Manutencao.update(req.params._id, update, (err, update) => {
        if (err) throw err;
        res.json(update);
    });
    
});


//deletar
router.delete('/:_id', (req, res) => {

    Manutencao.delete(req.params._id, (err, manutencao) => {
        if (err) throw err;
        res.json(manutencao);
    });
    
});


//encontrar um
router.get('/:_id', (req, res) => {

    Manutencao.getOne(req.params._id, (err, manutencao) => {
        if (err) throw err;
        res.json(manutencao);
    });
    
});


module.exports = router;