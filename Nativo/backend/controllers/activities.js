'use strict'
//Funtions or methods
var model_activities = require('../models/activities');
var filesis = require('fs');
var controller = {

    //Create new activities
    saveActivities: function (req, res) {
        var activities = new model_activities();

        var params = req.body;

        activities.name = params.name;
        activities.description = params.description;
        activities.category = params.category;
        activities.year = params.year;
        activities.type = params.type;
        activities.image = null;

        activities.save((err, activitiesStorage) => {
            if (err) return res.status(500).send({ message: 'Request error doct' });
            if (!activitiesStorage) return res.status(404).send({ message: 'I couldnt save' });
            return res.status(200).send({ activities: activitiesStorage });
        });
    },
    //Get id, activities depend of id
    getActivities: function (req, res) {
        var activitiesId = req.params.id;
        if (activitiesId == null) return res.status(404).send({ message: 'Activities not exist' });
        model_activities.findById(activitiesId, (err, activities) => {
            if (err) return res.status(500).send({ message: 'Request error data' })
            if (err) return res.status(404).send({ message: 'Activities not exist' });
            return res.status(200).send({ activities });
        });
    },
    //Get list activities
    getListActivities: function (req, res) {
        model_activities.find({}).sort('+year').exec((err, activities) => {
            if (err) return res.status(500).send({ message: 'Request error data' });
            if (!activities) return res.status(404).send({ message: 'Activities not exist' });
            return res.status(200).send({ activities });
        })
    },
    //Put update activities for id
    updateActivities: function (req, res) {
        var activitiesId = req.params.id;
        var update = req.body;
        model_activities.findByIdAndUpdate(activitiesId, update, { new: true }, (err, activitiesUpdate) => {
            if (err) return res.status(500).send({ message: "Error update" });
            if (!activitiesUpdate) return res.status(404).send({ message: "Activities not exist" });
            return res.status(200).send({ activities: activitiesUpdate });
        });
    },
    //Delete activities for id (Use find.remove)
    deleteActivities: function (req, res) {
        var activitiesId = req.params.id;
        model_activities.findByIdAndRemove(activitiesId, (err, activitiesDelete) => {
            if (err) return res.status(500).send({ message: 'Activity not removed' });
            if (!activitiesDelete) return res.status(404).send({ message: 'Not possible to delete this activity' });
            return res.status(200).send({ activities: activitiesDelete });
        });
    },
    //Upload images on activities
    uploadImage: function (req, res) {
        var activitiesId = req.params.id;
        var fileName = 'Img not upload';
        if (req.files) {
            var filePath = req.files.image.path;
            var fileSplit = filePath.split('\\');
            var fileName = fileSplit[1];
            var extSplit = fileName.split('\.');
            var fileExt = extSplit[1];
            //Condition type image
            if (fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif') {
                model_activities.findByIdAndUpdate(activitiesId, { image: fileName }, { new: true }, (err, updateActivities) => {
                    if (err) return res.status(500).send({ message: 'Image not upload' });
                    if (!updateActivities) return res.status(404).send({ message: 'Not possibke to upload image' });
                    return res.status(200).send({ activities: updateActivities });
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
