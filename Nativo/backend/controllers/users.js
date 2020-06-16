'use strict'
//Funtions or methods
var model_users = require('../models/users');
var filesis = require('fs');
var controller = {

    //Create new users
    saveUsers: function (req, res) {
        var users = new model_users();

        var params = req.body;

        users.name = params.name;
        users.lastName = params.lastName;
        users.company = params.company;
        users.age = params.age;
        users.image = null;

        users.save((err, usersStorage) => {
            if (err) return res.status(500).send({ message: 'Request error doct' });
            if (!usersStorage) return res.status(404).send({ message: 'I couldnt save' });
            return res.status(200).send({ users: usersStorage });
        });
    },
    //Get id, users depend of id
    getUsers: function (req, res) {
        var usersId = req.params.id;
        if (usersId == null) return res.status(404).send({ message: 'User not exist' });
        model_users.findById(usersId, (err, users) => {
            if (err) return res.status(500).send({ message: 'Request error data' })
            if (err) return res.status(404).send({ message: 'User not exist' });
            return res.status(200).send({ users });
        });
    },
    //Get list activities
    getListUsers: function (req, res) {
        model_users.find({}).sort('-age').exec((err, users) => {
            if (err) return res.status(500).send({ message: 'Request error data' });
            if (!users) return res.status(404).send({ message: 'Users not list' });
            return res.status(200).send({ users });
        })
    },
    //Put update users for id
    updateUsers: function (req, res) {
        var usersId = req.params.id;
        var update = req.body;
        model_users.findByIdAndUpdate(usersId, update, { new: true }, (err, usersUpdate) => {
            if (err) return res.status(500).send({ message: "Error update" });
            if (!usersUpdate) return res.status(404).send({ message: "User not exist" });
            return res.status(200).send({ users: usersUpdate });
        });
    },
    //Delete users for id (Use find.remove)
    deleteUsers: function (req, res) {
        var usersId = req.params.id;
        model_users.findByIdAndRemove(usersId, (err, usersDelete) => {
            if (err) return res.status(500).send({ message: 'User not removed' });
            if (!usersDelete) return res.status(404).send({ message: 'Not possible to delete this user' });
            return res.status(200).send({ users: usersDelete });
        });
    },
    //Upload images on users
    uploadImage: function (req, res) {
        var usersId = req.params.id;
        var fileName = 'Img not upload';
        if (req.files) {
            var filePath = req.files.image.path;
            var fileSplit = filePath.split('\\');
            var fileName = fileSplit[1];
            var extSplit = fileName.split('\.');
            var fileExt = extSplit[1];
            //Condition type image
            if (fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif') {
                model_users.findByIdAndUpdate(usersId, { image: fileName }, { new: true }, (err, updateUsers) => {
                    if (err) return res.status(500).send({ message: 'Image not upload' });
                    if (!updateUsers) return res.status(404).send({ message: 'Not possible to upload image' });
                    return res.status(200).send({ users: updateUsers });
                });
            } else {
                filesis.unlink(filePath, (err) => {
                    return res.status(404).send({ message: "Not valid extension" })
                });
            }
        }
    }
};

//Retunr model exports
module.exports = controller; 
