exports.up = function(knex) {
  return knex.schema.createTable("mobs", table => {
    table.increments("id");
    table.string("mob_name");
    table.string("era");
    table.string("zone");
    table.string("notes");
    table.integer("xp");
    table.string("agg");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("mobs");
};
