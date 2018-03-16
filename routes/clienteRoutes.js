const express = require('express');
const router = express.Router();
const Cliente = require('../models/clienteModel');

//get all clientes
router.get('/', (req, res) => {

    Cliente.getAll((err, clientes) => {
        if (err) throw err;
        res.json(clientes);
    });

});

//create cliente
router.post('/', (req, res) => {

    let novoCliente = {
        fullName: req.body.fullName,
        email: req.body.email
    }

    Cliente.add(novoCliente, (err, cliente) => {
        if (err) throw err;
        res.json(cliente);
    });
    
});


//update cliente
router.put('/:_id', (req, res) => {

    let update = {
        fullName: req.body.fullName,
        email: req.body.email
    }

    Cliente.update(req.params._id, update, (err, update) => {
        if (err) throw err;
        res.json(update);
    });
    
});


//deletar cliente
router.delete('/:_id', (req, res) => {

    Cliente.delete(req.params._id, (err, cliente) => {
        if (err) throw err;
        res.json(cliente);
    });
    
});


//encontrar um cliente
router.get('/:_id', (req, res) => {

    Cliente.getOne(req.params._id, (err, cliente) => {
        if (err) throw err;
        res.json(cliente);
    });
    
});


module.exports = router;
