const express = require('express');
const routes = express.Router();

const UserController =  require('./controllers/UserController');

routes.get('/users', UserController.index);
routes.post('/users', UserController.create);
routes.put('/users/:userId', UserController.update);

module.exports = routes;
