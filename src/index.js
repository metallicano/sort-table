const express = require('express');
const path = require('path');
const engine = require('ejs-mate');
//inicializaciones
const app = express();
require('./database');

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname,'views'));
app.engine('ejs',engine);
app.set('view engine', 'ejs');
//middlewares
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//routes
app.use(require('./routes/index'));
//static files
app.use(express.static(path.join(__dirname,'public')));

app.listen(app.get('port'),()=>{
    console.log(`server on port ${app.get('port')}`);
});