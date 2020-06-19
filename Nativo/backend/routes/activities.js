'use strict'
//Routes
var express = require('express');
var ActivitiesController = require('../controllers/activities')

var router = express.Router();

var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({ uploadDir: './uploadsact' });

router.post('/addactivities', ActivitiesController.saveActivities);
router.get('/activities/:id?', ActivitiesController.getActivities);
router.get('/listactivities', ActivitiesController.getListActivities);
router.put('/activities/:id', ActivitiesController.updateActivities);
router.delete('/activities/:id', ActivitiesController.deleteActivities);
router.post('/uploadimgact/:id', multipartMiddleware, ActivitiesController.uploadImage);
router.get('/getimgact/:image', ActivitiesController.getImageFile);

module.exports = router;
