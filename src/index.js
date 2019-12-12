//  MIN 3:51
//https://www.youtube.com/watch?v=TqC3e8nBycg&t=72s

const express = require('express');
const config = require('./server/config.js');

//DATABASE
require('./database');


const app = config(express());


//Starting the server
app.listen(app.get('port'), ()=>{
    console.log("Server on port", app.get('port'));
});
