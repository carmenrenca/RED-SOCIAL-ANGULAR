'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//Cargar Rutas
var userRoutes = require('./Routes/user');


//Middlewares

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());



//Cors

//Rutas
app.use('/api', userRoutes);



//Exportar configuracion

module.exports = app;
