'use strict'
//Routes
var express = require('express');
var UsersController = require('../controllers/users')

var router = express.Router();

var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({ uploadDir: './uploadsusr' });

router.post('/addusers', UsersController.saveUsers);
router.get('/user/:id?', UsersController.getUsers);
router.get('/listusers', UsersController.getListUsers);


module.exports = router;
