const express = require('express');
const router = express.Router();
const Fornecedor = require('../models/fornecedorModel');

//get all
router.get('/', (req, res) => {

    Fornecedor.getAll((err, fornecedores) => {
        if (err) throw err;
        res.json(fornecedores);
    });

});

//create
router.post('/', (req, res) => {

    let novoFornecedor = {
        tipo: req.body.tipo,
        nomeFantasia: req.body.nomeFantasia,
        email: req.body.email,
        endereco: {
            logradouro: req.body.endereco_logradouro,
            numero: req.body.endereco_numero,
            cidade: req.body.endereco_cidade,
            cep: req.body.endereco_cep,
        },
        fixo: req.body.fixo
    }

    Fornecedor.add(novoFornecedor, (err, fornecedor) => {
        if (err) throw err;
        res.json(fornecedor);
    });
    
});


//update
router.put('/:_id', (req, res) => {

    let update = {
        tipo: req.body.tipo,
        nomeFantasia: req.body.nomeFantasia,
        email: req.body.email,
        endereco: {
            logradouro: req.body.endereco_logradouro,
            numero: req.body.endereco_numero,
            cidade: req.body.endereco_cidade,
            cep: req.body.endereco_cep,
        },
        fixo: req.body.fixo
    }

    Fornecedor.update(req.params._id, update, (err, update) => {
        if (err) throw err;
        res.json(update);
    });
    
});


//deletar
router.delete('/:_id', (req, res) => {

    Fornecedor.delete(req.params._id, (err, fornecedor) => {
        if (err) throw err;
        res.json(fornecedor);
    });
    
});


//encontrar um
router.get('/:_id', (req, res) => {

    Fornecedor.getOne(req.params._id, (err, fornecedor) => {
        if (err) throw err;
        res.json(fornecedor);
    });
    
});


module.exports = router;
