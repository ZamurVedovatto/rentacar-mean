const express = require('express');
const router = express.Router();
const Aluguel = require('../models/aluguelModel');

//get all alugueis
router.get('/', (req, res) => {

    Aluguel.getAll((err, alugueis) => {
        if (err) throw err;
        res.json(alugueis);
    });

});

//create aluguel
router.post('/', (req, res) => {

    let novo = {
        idCliente: req.body.idCliente,
        idVeiculo: req.body.idVeiculo,
        dataRetirada: req.body.dataRetirada,
        dataEntrega: req.body.dataEntrega
    }

    Aluguel.add(novo, (err, aluguel) => {
        if (err) throw err;
        res.json(aluguel);
    });
    
});


//update aluguel
router.put('/:_id', (req, res) => {

    let update = {
        idCliente: req.body.idCliente,
        idVeiculo: req.body.idVeiculo,
        dataRetirada: req.body.dataRetirada,
        dataEntrega: req.body.dataEntrega
    }

    Aluguel.update(req.params._id, update, (err, update) => {
        if (err) throw err;
        res.json(update);
    });
    
});


//deletar aluguel
router.delete('/:_id', (req, res) => {

    Aluguel.delete(req.params._id, (err, aluguel) => {
        if (err) throw err;
        res.json(aluguel);
    });
    
});


//encontrar um aluguel
router.get('/:_id', (req, res) => {

    Aluguel.getOne(req.params._id, (err, aluguel) => {
        if (err) throw err;
        res.json(aluguel);
    });
    
});


module.exports = router;
