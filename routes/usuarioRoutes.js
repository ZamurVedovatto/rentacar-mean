const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuarioModel');


//registrar
router.post('/', (req, res)=>{
    
    let novoUsuario = {
        nome: req.body.nome,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    }

    Usuario.add(novoUsuario, (err, usuario) => {
        if (err) throw err;
        res.json(usuario);
    });
})

//get all
router.get('/', (req, res) => {

    Usuario.getAll((err, usuarios) => {
        if (err) throw err;
        res.json(usuarios);
    });
});


//autenticar
router.post('/autenticar', (req, res, next)=>{
    res.send('autenticar');
})

//perfil
router.get('/', (req, res, next)=>{
    res.send('perfil');
})


module.exports = router;
