'use strict'
//Model database
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ResultsSchema = Schema({
    //Model results
});

module.exports = mongoose.model('activitie', ResultsSchema);
