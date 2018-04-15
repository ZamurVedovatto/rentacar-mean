const express = require ('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/usuarioModel');

//registrar
router.post('/registrar', (req, res, next) => {
    let newUser = new User({
        nome: req.body.nome,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    User.addUser(newUser, (err, user) => {
        if (err) {
            res.json({
                success: false,
                msg:'Failed to register user'
            });
        } else {
            res.json({
                success: true,
                msg: 'User registered'
            });
        }
    });
});

//autenticar
router.post('/autenticar', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, (err, user) => {
        if(err) throw err;
        if(!user) {
            return res.json({
                success: false,
                msg: 'Usuário não encontrado'
            });
        }

        User.comparePassword(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
                const token = jwt.sign({data: user}, config.secret, {
                expiresIn: 4800                
            });

            res.json({
                success: true,
                token: 'JWT ' + token,
                user: {
                    id: user._id,
                    nome: user.nome,
                    username: user.username,
                    emai: user.email
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
        user: req.user
    });
});

module.exports = router;