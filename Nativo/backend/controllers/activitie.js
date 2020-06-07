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
        if (activitieId == null) return res.status(404).send({ message: 'Activities not exist' });
        model_activite.findById(activitieId, (err, activitie) => {
            if (err) return res.status(500).send({ message: 'Request error data' })
            if (err) return res.status(404).send({ message: 'Activities not exist' });
            return res.status(200).send({ activitie });
        });
    },
    //Get list activities
    getListActivities: function (req, res) {
        model_activite.find({}).sort('+year').exec((err, activities) => {
            if (err) return res.status(500).send({ message: 'Request error data' });
            if (!activities) return res.status(404).send({ message: 'Activities not exist' });
            return res.status(200).send({ activities });
        })
    },
    //Put update activities for id
    updateActivities: function (req, res) {
        var activitieId = req.params.id;
        var update = req.body;
        model_activite.findByIdAndUpdate(activitieId, update, { new: true }, (err, activitieUpdate) => {
            if (err) return res.status(500).send({ message: "Error update" });
            if (!activitieUpdate) return res.status(404).send({ message: "Activities not exist" });
            return res.status(200).send({ activitie: activitieUpdate });
        });
    },
    //Delete activities for id (Use find.remove)
    deleteActivities: function (req, res) {
        var activitieId = req.params.id;
        model_activite.findByIdAndRemove(activitieId, (err, activitieDelete) => {
            if (err) return res.status(500).send({ message: 'Activity not removed' });
            if (!activitieDelete) return res.status(404).send({ message: 'Not possible to delete this activity' });
            return res.status(200).send({ activitie: activitieDelete });
        });
    },
    //Upload images on activities
    uploadImage: function (req, res) {
        var activitieId = req.params.id;
        var fileName = 'Img not upload';
        if (req.files) {
            var filePath = req.files.image.path;
            var fileSplit = filePath.split('\\');
            var fileName = fileSplit[1];
            model_activite.findByIdAndUpdate(activitieId, { image: fileName }, {new: true}, (err, updateActivities) => {
                if (err) return res.status(500).send({ message: 'Image not upload' });
                if (!updateActivities) return res.status(404).send({ message: 'Not possibke to upload image' });
                return res.status(200).send({ activitie: updateActivities });
            })

        } else {
            return res.status(200).send({ message: fileName })
        }
    }
};

//Retunr model exports
module.exports = controller; 
