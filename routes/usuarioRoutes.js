const express = require ('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Usuario = require('../models/usuarioModel');

//registrar
router.post('/registrar', (req, res, next) => {
    let novoUsuario = new Usuario({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        address: {
            street: req.body.address_street,
            number: req.body.address_number,
            city: req.body.address_city,
            zipCode: req.body.address_zipCode
        },
        phone: req.body.phone,
        cellPhone: req.body.cellphone,
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
                    id: usuario._id,
                    name: usuario.name,
                    username: usuario.usernome,
                    email: usuario.email,
                    password: usuario.password,
                    address: {
                        street: usuario.address_street,
                        number: usuario.address_number,
                        city: usuario.address_city,
                        zipCode: usuario.address_zipCode
                    },
                    phone: usuario.phone,
                    cellPhone: usuario.cellphone,
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