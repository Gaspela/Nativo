'use strict'
//Model database
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ResultsSchema = Schema({
    average: String,
    totalOfQuestions: String,
    solvedQuestions: String,
    totalAttempts: String
});

module.exports = mongoose.model('results', ResultsSchema);
