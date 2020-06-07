'use strict'
//Funtions or methods
var model_activite = require('../models/activitie');
var controller = {

    //Create new activities
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
            if (err) return res.status(500).send({ message: 'Request error doct' });
            if (!activitieStorage) return res.status(404).send({ message: 'I couldnt save' });
            return res.status(200).send({ activitie: activitieStorage });
        });
    },
    //Get id, activities depend of id
    getActivities: function (req, res) {
        var activitieId = req.params.id;
        if (activitieId == null) return res.status(404).send({ message: 'The activitie no exist' });
        model_activite.findById(activitieId, (err, activitie) => {
            if (err) return res.status(500).send({ message: 'Request error data' })
            if (err) return res.status(404).send({ message: 'The activitie no exist' });
            return res.status(200).send({ activitie });
        });
    },

    getListActivities: function(req, res) {
        model_activite.find({}).sort('+year').exec((err, activities)=> {
            if (err) return res.status(500).send({message: 'Request error data'});
            if (!activities) return res.status(404).send({message: 'Activities not exist'});
            return res.status(200).send({activities});
        })
    }

};

//Retunr model exports
module.exports = controller; 
