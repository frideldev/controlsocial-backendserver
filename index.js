const express = require('express');
require('dotenv').config();
const cors = require('cors');
const {dbConnection} = require('./database/config');
const app = express();
//Configurar Cors
app.use(cors());

// Lectura y Parseo de Body
app.use(express.json());
//Base de Datos
dbConnection();
// Rutas
app.use('/api/usuarios',require('./routes/usuarios'));
app.use('/api/barrios',require('./routes/barrios'));
app.use('/api/convocatorias',require('./routes/convocatorias'));
app.use('/api/dirigentes',require('./routes/dirigentes'));
app.use('/api/distritos',require('./routes/distritos'));
app.use('/api/municipios',require('./routes/municipios'));
app.use('/api/peticions',require('./routes/peticions'));
app.use('/api/poas',require('./routes/poas'));
app.use('/api/seguimientos',require('./routes/seguimientos'));
// Servidor Corriendo
app.listen(process.env.PORT,()=>{
    console.log("Servidor Corriendo en Puerto "+process.env.PORT);
});