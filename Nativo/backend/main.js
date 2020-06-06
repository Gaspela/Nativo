'use strict'
//Load librery mongosee
var mongoose = require('mongoose');
var app = require('./app'); //Express routes
var port = 3700;

//Conection db
mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/nativo_db',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=>{
        console.log(`connection to database established`)

        //Create server
        app.listen(port, () => {
            console.log("Server connected by URL: Localhost: 3700")
        });

    }).catch(err=> console.log(err));
