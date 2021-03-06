const knex = require('../database');

module.exports = {
    async index (req, res, next) {
        try {
            const { userId, page = 1 } = req.query;
            const query = knex('projects')
                .limit(5)
                .offset((page -1) * 5 );

            const countObj = knex('projects').count();

            if(userId) {
                query
                    .where({ user_id: userId })
                    .join('users', 'users.id', 'projects.user_id')
                    .select('projects.*', 'users.username')
                    .where('users.deleted_at', null);

                countObj.where({ user_id: userId });
            }

            const [count] = await countObj;
            res.header('X-Total-Count', count["count"]);

            const projects = await query;

            return res.json(projects);
        } catch (err) {

            next(err);
        }

    },

    async create (req, res, next) {
        try {
            const { title, user_id } = req.body;

            await knex('projects').insert({
                title,
                user_id,
            });

            return res.status(201).json({ msg: 'Projeto cadastrado.' });
        } catch (err) {
            next(err);
        }

    },
}
