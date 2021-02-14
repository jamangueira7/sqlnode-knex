const knex = require('../database');

module.exports = {
    async index (req, res, next) {
        try {
            const { userId } = req.query;
            const query = knex('projects');

            if(userId) {
                query
                    .where({ user_id: userId })
                    .join('users', 'users.id', 'projects.user_id')
                    .select('projects.*', 'users.username');
            }

            const projects = await query;

            return res.json(projects);
        } catch (err) {

            next(err);
        }

    },
}