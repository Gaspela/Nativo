'use strict'
//Routes
var express = require('express');
var UsersController = require('../controllers/users')

var router = express.Router();

var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({ uploadDir: './uploads/users' });

router.post('/addusers', UsersController.saveUsers);
router.get('/user/:id?', UsersController.getUsers);


module.exports = router;
