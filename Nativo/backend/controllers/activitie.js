'use strict'
//Funtions or methods
var model_activite = require('../models/activitie');
var controller = {

    home: function (req, res) {
        return res.status(200).send({
            message: "Soy home"
        });
    },

    test: function (req, res) {
        return res.status(200).send({
            message: "Test funtion(test)"
        });
    },

    saveActivities: function (req, res) {
        var activitie = new model_activite();

        var params = req.body;

        activitie.name = params.name;
        activitie.description = params.description;
        activitie.category = params.category;
        activitie.year = params.year;
        activitie.type = params.type;
        activitie.image = null;

        activitie.save((err, activitieStorage) => {
            if (err) return res.status(500).send({ message: 'Request error' });
            if (!activitieStorage) return res.status(404).send({ message: 'I couldnt save' });
            return res.status(200).send({ activitie: activitieStorage });
        });
    }
};

//Retunr model exports
module.exports = controller; 
