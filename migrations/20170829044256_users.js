exports.up = function(knex) {
  return knex.schema.createTable("users", table => {
    table.increments("id");
    table.string("user_name");
    table.string("hash");
    table.string("first_name");
    table.string("last_name");
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("users");
};
