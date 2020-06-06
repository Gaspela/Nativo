'use strict'
//Routes
var express = require('express');
var ActivitieController = require('../controllers/activitie')

var router = express.Router();

router.get('/home', ActivitieController.home);
router.post('/test', ActivitieController.test);
router.post('/addativitie', ActivitieController.saveActivities);
router.get('/activitie/:id?', ActivitieController.getActivities);

module.exports = router;
