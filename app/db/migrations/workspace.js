exports.up = function (knex, Promise) {
  return knex.schema.createTable('workspaces', t => {
    t.increments('id');
    // t.string('username')
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('workspaces');
};
