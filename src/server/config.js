const path = require('path');
const exphbs = require('express-handlebars');
const express = require('express');

const morgan = require('morgan');
const multer = require('multer');

const errorhandler = require('errorhandler');
const routes = require('../routes/index');


module.exports = app => {
    //SETTINGS
    app.set('port',process.env.PORT || 3000);
    app.set('views', path.join(__dirname, '../views'));
    
    app.engine('.hbs', exphbs({
        defaultLayout:'main',
        layoutsDir:path.join(app.get('views'), 'layouts'),
        partialsDir:path.join(app.get('views'), 'partials'),
        helpers:require('./helpers'),
        extname:'.hbs'

    }));

    app.set('view engine', '.hbs');
    
    
    //MIDDLEWARES
    app.use(morgan('dev'));
    app.use(multer({
        dest:path.join(__dirname, '../public/upload/temp')}).single('image')
    );
    app.use(express.urlencoded({extended:false}));
    app.use(express.json());
    

    //ROUTES
    routes(app);


    //STATIC FILES
    app.use('/public', express.static(path.join(__dirname, '../public')));


    //errorHandlers
    if('development' == app.get('env')) app.use(errorhandler);

    return app;
};