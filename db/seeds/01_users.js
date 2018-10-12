
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
      {user_name:'Frank', email: 'frank@test.com', password: 'asdf', user_city: 'nutley'},
      {user_name:'Sean', email: 'Sean@test.com', password: 'asdf', user_city: 'Phoenix'},
      {user_name:'Troy', email: 'troy@test.com', password: 'asdf', user_city: 'Tempe'},
      {user_name:'Jeff', email: 'jeff@test.com', password: 'asdf', user_city: 'Scottsdale'},
      {user_name:'knicks', email: 'knicks@test.com', password: 'asdf', user_city: 'Manhattan'}
      ]);
    });
};
