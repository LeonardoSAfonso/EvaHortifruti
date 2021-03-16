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

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/config/database/migrations`
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'evaHortiFruti',
      user: 'postgres',
      password:'9327'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/config/database/migrations`
    }
  }

};
