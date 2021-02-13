const knex = require('../database');

module.exports = {
    async index (req, res) {
        const results = await knex('users');

        return res.json(results);
    },

    async create (req, res) {
        const results = await knex('users').insert();

        return res.json(results);
    },

}
