'use strict'
//Routes
var express = require('express');
var ActivitieController = require('../controllers/activities')

var router = express.Router();

var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({ uploadDir: './uploads' });

router.post('/addactivities', ActivitieController.saveActivities);
router.get('/activities/:id?', ActivitieController.getActivities);
router.get('/listactivities', ActivitieController.getListActivities);
router.put('/activities/:id', ActivitieController.updateActivities);
router.delete('/activities/:id', ActivitieController.deleteActivities);
router.post('/uploadimg/:id', multipartMiddleware, ActivitieController.uploadImage);

module.exports = router;
