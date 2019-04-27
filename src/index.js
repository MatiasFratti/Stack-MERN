const express = require('express');
const path = require('path');
const routes = require('./routes/index')
//initialized
const app = express();

// conections to database
const mongoose = require('./database');

// settings
app.set('port', process.env.PORT || 3080);

// middlewares
app.use(express.json());
// routes
app.use('/api/users',routes);
// static files
app.use(express.static(path.join(__dirname,'public')));
// server init

app.listen(app.get('port'),()=>{
    console.log('Servidor encendido en puerto', app.get('port'));
});