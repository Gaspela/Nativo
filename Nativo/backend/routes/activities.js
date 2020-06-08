'use strict'
//Routes
var express = require('express');
var ActivitiesController = require('../controllers/activities')

var router = express.Router();

var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({ uploadDir: './uploads/activities' });

router.post('/addactivities', ActivitiesController.saveActivities);
router.get('/activities/:id?', ActivitiesController.getActivities);
router.get('/listactivities', ActivitiesController.getListActivities);
router.put('/activities/:id', ActivitiesController.updateActivities);
router.delete('/activities/:id', ActivitiesController.deleteActivities);
router.post('/uploadimg/:id', multipartMiddleware, ActivitiesController.uploadImage);

module.exports = router;
