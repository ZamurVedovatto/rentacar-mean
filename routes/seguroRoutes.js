const express = require('express');
const router = express.Router();
const Seguro = require('../models/seguroModel');

//get all
router.get('/', (req, res) => {

    Seguro.getAll((err, seguros) => {
        if (err) throw err;
        res.json(seguros);
    });

});

//create
router.post('/', (req, res) => {

    let novoSeguro = {
        seguradora: req.body.seguradora
    }

    Seguro.add(novoSeguro, (err, seguro) => {
        if (err) throw err;
        res.json(seguro);
    });
    
});


//update
router.put('/:_id', (req, res) => {

    let update = {
        seguradora: req.body.seguradora
    }

    Seguro.update(req.params._id, update, (err, update) => {
        if (err) throw err;
        res.json(update);
    });
    
});


//deletar
router.delete('/:_id', (req, res) => {

    Seguro.delete(req.params._id, (err, seguro) => {
        if (err) throw err;
        res.json(seguro);
    });
    
});


//encontrar um
router.get('/:_id', (req, res) => {

    Seguro.getOne(req.params._id, (err, seguro) => {
        if (err) throw err;
        res.json(seguro);
    });
    
});


module.exports = router;
