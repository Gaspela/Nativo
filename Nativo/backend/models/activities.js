'use strict'
//Model database
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ActivitiesSchema = Schema({
    name: String,
    description: String,
    category: String,
    year: Number,
    type: String,
    image: String
});

module.exports = mongoose.model('activities', ActivitiesSchema);
