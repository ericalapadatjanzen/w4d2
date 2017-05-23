const settings = require("./settings");
// Update with your config settings.

module.exports = {


  development: {
    client: 'pg',
    connection: {
      database: settings.database,
      user:     settings.user,
      password: settings.password
    },


    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
