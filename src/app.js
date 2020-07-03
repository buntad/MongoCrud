const path = require('path');
const morgan = require('morgan');
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// connect mongodb
mongoose.connect('mongodb://localhost/crud-mongo')
	.then(db => console.log('Db conectada'))
	.catch(err => console.log(err));


// routes
const indexRoutes = require('./routes/index');

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//routes
app.use('/', indexRoutes);

//server start
app.listen(app.get('port'),() => {
	console.log(`Escucho en el puerto  ${app.get('port')}`);
});
