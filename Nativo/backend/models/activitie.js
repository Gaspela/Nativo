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
    Image: String
});

module.exports = mongoose.model('activitie', ActivitiesSchema);
