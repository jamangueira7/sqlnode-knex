const knex = require('../database');

module.exports = {
    async index (req, res, next) {
        try {
            const users = await knex('users');

            return res.json(users);
        } catch (err) {

            next(err);
        }

    },

    async create (req, res, next) {
        try {

            const { username } = req.body;

            await knex('users').insert({ username });

            return res.status(201).send();
        } catch (err) {

            next(err);
        }
    },

    async update (req, res, next) {
        try {

            const { username } = req.body;
            const { userId } = req.params;

            await knex('users')
                .update({ username })
                .where({ id: userId });

            return res.send();
        } catch (err) {

            next(err);
        }
    },

    async delete (req, res, next) {
        try {

            const { userId } = req.params;

            await knex('users')
                .where({ id: userId })
                .update('deleted_at', new Date());

            return res.send();
        } catch (err) {

            next(err);
        }
    },


}
