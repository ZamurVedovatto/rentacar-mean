const express = require('express');
const bodyParser = require('body-parser');
const cors = require('express-cors');
const config = require('./config/config');

//database config
const mongoose = require('mongoose');
const db_string = 'mongodb://user:pw@ds243345.mlab.com:43345/restful-api'
    .replace("user", config.name)
    .replace("pw", config.pw);
    
mongoose.connect(db_string);
const db = mongoose.connection;
db.on('connected', () => console.log('Conectado com sucesso em ' + db_string))
db.on('error', (err) => console.log('Erro no banco de dados: ' + err));

//server config
const app = express();

app.use(cors({
    allowedOrigins: [
        '*', 'http://localhost:4200'
    ]
}))

const port = 3000;
app.get('/', (req, res)=> { res.send('Index do servidor')});

//routes
const clienteRouter = require('./routes/clienteRoutes');
const veiculoRouter = require('./routes/veiculoRoutes');
const aluguelRouter = require('./routes/aluguelRoutes');

//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/cliente', clienteRouter);
app.use('/veiculo', veiculoRouter);
app.use('/aluguel', aluguelRouter);

app.listen(port, () => console.log('Servidor rodando na porta ' + port));
