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
router.put('/user/:id', UsersController.updateUsers);
router.delete('/user/:id', UsersController.deleteUsers);
router.post('/uploadusr/:id',multipartMiddleware, UsersController.updateUsers);

module.exports = router;
