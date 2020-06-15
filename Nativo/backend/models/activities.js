'use strict'
//Model database
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ActivitiesSchema = Schema({
    title: String,
    description: String,
    company: String,
    date: String,
    numActivities: String,
    tutor: String,
    rescorrect: String,
    resincorrect1: String,
    resincorrect2: String,
    resincorrect3: String,
    image: String
});

module.exports = mongoose.model('activities', ActivitiesSchema);
