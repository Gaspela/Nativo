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
            return res.status(200).send({ activities: usersStorage });
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
    

};

//Retunr model exports
module.exports = controller; 
