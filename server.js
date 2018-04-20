const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config/database');
const path = require('path'); //core module
const passport = require('passport');

//database config
const mongoose = require('mongoose');    
mongoose.connect(config.database);
const db = mongoose.connection;
db.on('connected', () => console.log('Conectado com sucesso'))
db.on('error', (err) => console.log('Erro no banco de dados: ' + err));


//server config
const app = express();
const port = 3000;
//start server
app.listen(port, () => console.log('Servidor rodando na porta ' + port));


//routes
//INDEX ROUTE
app.get('/', (req, res)=> { res.send('Index do servidor')});
const clienteRouter = require('./routes/clienteRoutes');
const veiculoRouter = require('./routes/veiculoRoutes');
const aluguelRouter = require('./routes/aluguelRoutes');
const usuarioRouter = require('./routes/usuarioRoutes');
const seguroRouter = require('./routes/seguroRoutes');


//middlewares
//set static folder
app.use(express.static(path.join(__dirname, 'angular-src'))); //no video, ao inves de 'angular-src', foi usada 'public'

//CORS
app.use(cors());

//BODYPARSER
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());

//PASSPORT
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

//ROUTES
app.use('/cliente', clienteRouter);
app.use('/veiculo', veiculoRouter);
app.use('/aluguel', aluguelRouter);
app.use('/usuario', usuarioRouter);
app.use('/seguro', seguroRouter);


//após ngbuild, caso seja acessada qualquer outra rota, usuário é direcionado para o index
app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public/index.html'));
})