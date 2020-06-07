'use strict'
//Model database
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsersSchema = Schema({
    //Model users
});

module.exports = mongoose.model('activitie', UsersSchema);
