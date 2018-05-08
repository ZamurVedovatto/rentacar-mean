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
        email: req.body.email,
        endereco: {
            logradouro: req.body.endereco_logradouro,
            numero: req.body.endereco_numero,
            cidade: req.body.endereco_cidade,
            cep: req.body.endereco_cep,
        },
        fixo: req.body.fixo,
        celular: req.body.celular,
        alugueisIds: undefined
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
        email: req.body.email,
        endereco: {
            logradouro: req.body.endereco_logradouro,
            numero: req.body.endereco_numero,
            cidade: req.body.endereco_cidade,
            cep: req.body.endereco_cep,
        },
        fixo: req.body.fixo,
        celular: req.body.celular,
        alugueisIds: req.body.alugueisIds
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