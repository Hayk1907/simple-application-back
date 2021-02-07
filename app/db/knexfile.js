module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://slack',
    migrations: {
      directory: './migrations',
      tableName: 'knex_migrations'
    }
  },
  production: {}
};
