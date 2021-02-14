const express = require('express');
const routes = express.Router();

const UserController =  require('./controllers/UserController');
const ProjectController =  require('./controllers/ProjectController');

routes.get('/users', UserController.index);
routes.post('/users', UserController.create);
routes.put('/users/:userId', UserController.update);
routes.delete('/users/:userId', UserController.delete);

routes.get('/projects', ProjectController.index);

module.exports = routes;
