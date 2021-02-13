const knex = require('../database');

module.exports = {
    async index (req, res) {
        const users = await knex('users');

        return res.json(users);
    },

    async create (req, res) {
        const { username } = req.body;

        const user = await knex('users').insert({ username });

        return res.json(user);
    },

}
