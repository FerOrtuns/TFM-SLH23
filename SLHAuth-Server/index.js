
const express = require ('express');

const cors = require ('cors');

require('dotenv').config();

const {dbConnection} = require ('./db/config');


const app = express();

// CONEXION A BD

dbConnection();

//DIRECTORIO PUBLICO DONDE ESTARA NUESTRA PAG ANGULAR

app.use(express.static('public'));

//CORS para autorizar peticiones de urls exteriores a mi api

app.use(cors());

// LECTURA Y PARSEO DEL BODY OTRO MIDDLEWARE

app.use(express.json());


// RUTAS

app.use('/slh/dashboard', require('./routes/dashboard') )
app.use('/slh/auth', require('./routes/auth') );

//DEMAS RUTAS PARA DESPLEGAR EN HEROKU

app.get('*', (req, res)=>{

        res.sendFile (path.resolve(__dirname, 'public/index.html'));
});



app.listen(process.env.PORT, ()=>{
    console.log(`servidor funcionando en puerto: ${ process.env.PORT }`); 
});

