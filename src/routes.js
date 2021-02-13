const express = require('express');
const knex = require('./database');

const routes = express.Router();

routes.get('/users', (req, res) => {
    return knex('users')
        .then((results) =>
            res.json(results));
});

module.exports = routes;
