// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'evahortifruti',
      user:'postgres',
      password:'9327'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/config/database/migrations`
    }
  },
};
