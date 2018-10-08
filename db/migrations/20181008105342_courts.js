exports.up = function(knex, Promise) {
  return knex.schema.createTable('courts', (table) => {
    table.increments();
    table.string('court_name');
    table.string('court_address');
    table.string('court_city');
    table.string('type');
    table.integer('rim_count');
    table.integer('votes').defaultsTo(0);
    table.integer('users_id')
     .notNullable()
     .references('id')
     .inTable('users')
     .onDelete('CASCADE')
     .index();
    table.timestamps(true, true);
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('courts')
};
