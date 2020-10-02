'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3800;


mongoose.set('useFindAndModify', false);

//CONEXION A LA BASE DE DATOS

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://carmenrenca:8J2vHK3NVyzupEW@cluster0.brnvp.mongodb.net/cluster0?retryWrites=true&w=majority', {useNewUrlParser:true}).then(()=>{
    console.log('La conexión a la base de datos se ha realizado con éxito');
    //CREAR SERVIDOR
    app.listen(port, ()=>{
        console.log('Servidor corrinedo en http://localhost:3800');
    })

}).catch(err=>{ 
    console.log(err);
    
})