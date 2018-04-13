const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/config');

//usuario schema
const UsuarioSchema = mongoose.Schema({
    nome: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const Usuario = module.exports = mongoose.model('Usuario', UsuarioSchema);

module.exports.getById = (id, callback)=>{
    Usuario.findById(id, callback);
}

module.exports.getAll = function(callback){
    console.log('Usuarios localizados com sucesso');    
    Usuario.find(callback);
}

module.exports.getByUsername = (username, callback)=>{
    const query = {username: username};
    Usuario.findOne(query, callback);
}

module.exports.add = (novoUsuario, callback)=>{
    //hash the password
    bcrypt.genSalt(10, (err, salt)=>{
        bcrypt.hash(novoUsuario.password, salt, (err, hash)=>{
            if (err) { 
                throw err 
            } else {
                console.log('Usuário adicionado com sucesso');    
                novoUsuario.password = hash;
                Usuario.create(novoUsuario, callback);
            }
        });
    });
}