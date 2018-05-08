const express = require ('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Usuario = require('../models/usuarioModel');

//registrar
router.post('/registrar', (req, res, next) => {
    let novoUsuario = new Usuario({
        fullName: req.body.fullName,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        endereco: {
            logradouro: req.body.endereco_logradouro,
            numero: req.body.endereco_numero,
            cidade: req.body.endereco_cidade,
            cep: req.body.endereco_cep,
        },
        fixo: req.body.fixo,
        celular: req.body.celular,
        linkedin: req.body.linkedin
    });

    Usuario.addUsuario(novoUsuario, (err, usuario) => {
        if (err) {
            res.json({
                success: false,
                msg:'Falha ao registrar o usuário'
            });
        } else {
            res.json({
                success: true,
                msg: 'Usuário registrado'
            });
        }
    });
});

//autenticar
router.post('/autenticar', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    Usuario.getUsuarioByUsername(username, (err, usuario) => {
        if(err) throw err;
        if(!usuario) {
            return res.json({
                success: false,
                msg: 'Usuário não encontrado'
            });
        }

        Usuario.compararPassword(password, usuario.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
                const token = jwt.sign({data: usuario}, config.secret, {
                expiresIn: 4800                
            });

            res.json({
                success: true,
                token: 'JWT ' + token,
                usuario: {
                    fullName: usuario.fullName,
                    username: usuario.username,
                    email: usuario.email,
                    password: usuario.password,
                    endereco: {
                        logradouro: usuario.endereco_logradouro,
                        numero: usuario.endereco_numero,
                        cidade: usuario.endereco_cidade,
                        cep: usuario.endereco_cep,
                    },
                    fixo: usuario.fixo,
                    celular: usuario.celular,
                    linkedin: usuario.linkedin
                }
            });
            } else {
                return res.json({
                    success: false,
                    msg: 'Senha incorreta'
                })
            }
        });
    });
});

//perfil
router.get('/perfil', passport.authenticate('jwt', {session:false}), (req, res, next) => {    

    res.json({
        usuario: req.user
    });
});

module.exports = router;