const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const UsuarioSchema = new mongoose.Schema({    
    fullName: { type: String, require: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    endereco: {
        logradouro: String,
        numero: Number,
        cidade: String,
        cep: String
    },
    fixo: String,
    celular: String,
    linkedin: { type: String }
    },
    { collection: 'usuarios' }
);

const Usuario = module.exports = mongoose.model('Usuario', UsuarioSchema);

module.exports.getUsuarioById = function (id, callback) {
    Usuario.findById(id, callback); //mongoose function
};

module.exports.getUsuarioByUsername = function (username, callback) {
    const query = {username: username};
    Usuario.findOne(query, callback);
};

module.exports.addUsuario = function (novoUsuario, callback) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(novoUsuario.password, salt, (err, hash) => {
            if(err) throw err;
            novoUsuario.password = hash;
            novoUsuario.save(callback);
        });
    });
};

module.exports.compararPassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if(err) throw err;
        callback(null, isMatch);
    });
}