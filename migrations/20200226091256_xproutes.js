exports.up = function(knex) {
    return knex.schema.createTable("xproutes", table => {
      table.increments("id");
      table.integer("user_id");
      table.integer("mob_id");
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable("xproutes");
  };
  