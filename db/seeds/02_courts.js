
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('courts').del()
    .then(function () {
      // Inserts seed entries
      return knex('courts').insert([
        {court_name:'Palma Park', court_address: '1135 E. Dunlap Ave. Phoenix,AZ 85020', court_city: 'Phoenix', court_type: 'outdoor', rim_count:2, votes:0},
        {court_name:'LA Fitness', court_address: '2077 E. Camelback Rd. Phoenix,AZ 85016', court_city: 'Phoenix', court_type: 'indoor', rim_count:2, votes:0}
      ]);
    });
};
