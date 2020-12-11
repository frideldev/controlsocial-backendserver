const express = require('express');
require('dotenv').config();
const cors = require('cors');
const {dbConnection} = require('./database/config');
const app = express();
//Configurar Cors
app.use(cors());
//Base de Datos
dbConnection();
// Servidor Corriendo
app.listen(process.env.PORT,()=>{
    console.log("Servidor Corriendo en Puerto "+process.env.PORT);
});