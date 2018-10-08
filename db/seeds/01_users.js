
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {user_name:'Frank', email: 'frank@test.com', password: 'asdf', user_city: 'Phoenix'},
        {user_name:'Sean', email: 'Sean@test.com', password: 'asdf', user_city: 'Phoenix'}
      ]);
    });
};
