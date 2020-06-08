'use strict'
//Model database
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsersSchema = Schema({
    name: String,
    lastName: String,
    age: Number,
    company: String,
    image: String
});

module.exports = mongoose.model('users', UsersSchema);
