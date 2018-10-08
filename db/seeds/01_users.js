
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {user_name:'Frank', email: 'frank@test.com', password: 'asdf', user_address: '515 E Grant, Phoenix, AZ, 85004', user_city: 'Phoenix'},
        {user_name:'Sean', email: 'Sean@test.com', password: 'asdf', user_address: '505 E Grant, Phoenix, AZ, 85004', user_city: 'Phoenix'}
      ]);
    });
};
