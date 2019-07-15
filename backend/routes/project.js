const express = require('express');
const router = express.Router();

const validateProjectInput = require('../validation/project');

const Project = require('../models/Project');
const User = require('../models/User');

//
// Create a new Project
//
router.post('/create', function(req, res) {

    console.log('This is the post method in project routes', req.body);
    // TODO - Make Validation Function For Project Creation
    const { errors, isValid } = validateProjectInput(req.body);

    if(!isValid) {
        return res.status(400).json(errors);
    }
    Project.findOne({
        name: req.body.name
    }).then(project => {
        if(project) {
            return res.status(400).json({
                name: 'A project with this name already exists'
            });
        }
        else {
            // Create New Project
            const newProject = new Project({
                name: req.body.name,
                lists: req.body.lists
            });
            newProject.save()
                .then(doc => {
                    if(!doc || doc.length === 0){
                        return res.status(500).send(doc)
                    }
                    res.status(201).send(doc);
                })
                .catch(err => {
                    res.status(500).json(err);
                })

            //TODO - ADD Project to Project array for current user
            const { user } = req.body.user;
            User.findById(user.ObjectId)
                .then((user) => {
                    if(!user) {
                        return res.status(404).send('No User is Signed In')
                    }
                    user.projects.push(newProject);
                    user.save()
                        .then(doc => {
                            if(!doc || doc.length === 0){
                                return res.status(500).send(doc)
                            }
                            res.status(201).send(doc);
                        })
                        .catch(err => {
                            res.status(500).json(err);
                        })
                })
        }
    });
});

// Get all Projects
router.get('/getAll', (req, res) => {
    Project.find()
        .then(projects => {
            res.json(projects);
        })
        .catch(err => {
            res.status(500).json(err)
        })
});

module.exports = router;