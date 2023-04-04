
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

app.use('/slh/dashboard/myteam/infoGMs', require('./routes/dashboard') );
app.use('/slh/dashboard/myleague/equipos', require('./routes/equipos') );
app.use('/slh/dashboard/myleague/ficharfa', require('./routes/ficharFA') );
app.use('/slh/dashboard/myteam/players', require('./routes/players') );
app.use('/slh/dashboard/myteam/playersfa', require('./routes/playersFA') );
app.use('/slh/dashboard/myteam/infoGM', require('./routes/infoGMByEmail') );
app.use('/slh/dashboard/mySLHNews', require('./routes/mySLHNews') );
app.use('/slh/auth', require('./routes/auth') );

//DEMAS RUTAS PARA DESPLEGAR EN HEROKU

app.get('*', (req, res)=>{

        res.sendFile (path.resolve(__dirname, 'public/index.html'));
});



app.listen(process.env.PORT, ()=>{
    console.log(`servidor funcionando en puerto: ${ process.env.PORT }`); 
});

