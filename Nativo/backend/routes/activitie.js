'use strict'
//Routes
var express = require('express');
var ActivitieController = require('../controllers/activitie')

var router = express.Router();

var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({ uploadDir: './uploads'});

router.post('/addativitie', ActivitieController.saveActivities);
router.get('/activitie/:id?', ActivitieController.getActivities);
router.get('/listactivities', ActivitieController.getListActivities);
router.put('/activitie/:id', ActivitieController.updateActivities);
router.delete('/activitie/:id', ActivitieController.deleteActivities);
router.post('/uploadimg/:id', multipartMiddleware , ActivitieController.uploadImage);
module.exports = router;
