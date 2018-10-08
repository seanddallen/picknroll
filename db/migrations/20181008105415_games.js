exports.up = function(knex, Promise) {
  return knex.schema.createTable('games', (table) => {
    table.increments();
    table.string('game_name');
    table.string('game_type');
    table.string('game_skill');
    table.string('game_day');
    table.integer('game_time');
    table.string('ampm')
    table.integer('courts_id')
     .notNullable()
     .references('id')
     .inTable('courts')
     .onDelete('CASCADE')
     .index();
    table.timestamps(true, true);
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('games')
};
