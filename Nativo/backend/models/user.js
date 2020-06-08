'use strict'
//Model database
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsersSchema = Schema({
    lastName: String,
    name: String,
    age: Number,
    company: String,
    image: String
});

module.exports = mongoose.model('users', UsersSchema);
