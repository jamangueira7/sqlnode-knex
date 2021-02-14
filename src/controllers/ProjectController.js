const knex = require('../database');

module.exports = {
    async index (req, res, next) {
        try {
            const projects = await knex('projects');

            return res.json(projects);
        } catch (err) {

            next(err);
        }

    },
}
