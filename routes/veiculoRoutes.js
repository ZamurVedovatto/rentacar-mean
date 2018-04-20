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

    let novoVeiculo = {
        fabrica: req.body.fabrica,
        modelo: req.body.modelo,
        placa: req.body.placa,
        cor: req.body.cor,
        anoFabricacao: req.body.anoFabricacao,
        valorDiaria: req.body.valorDiaria,
        disponivel: false
    }

    Veiculo.add(novoVeiculo, (err, veiculo) => {
        if (err) throw err;
        res.json(veiculo);
    });
    
});


//update veiculo
router.put('/:_id', (req, res) => {

    let update = {
        fabrica: req.body.fabrica,
        modelo: req.body.modelo,
        placa: req.body.placa,
        cor: req.body.cor,
        anoFabricacao: req.body.anoFabricacao,
        valorDiaria: req.body.valorDiaria,
        disponivel: req.body.disponivel
    }

    Veiculo.update(req.params._id, update, (err, update) => {
        if (err) throw err;
        res.json(update);
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
