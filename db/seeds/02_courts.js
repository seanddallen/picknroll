
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('courts').del()
    .then(function () {
      // Inserts seed entries
      return knex('courts').insert([
        {court_name:'Palma Park', court_address: '1135 E. Dunlap Ave.', court_city: 'Phoenix', court_zip: 85020, court_state: 'AZ', court_type: 'outdoor', rim_count:2, votes:0},
        {court_name:'LA Fitness', court_address: '2077 E. Camelback Rd.', court_city: 'Phoenix', court_zip: 85016, court_state: 'AZ', court_type: 'indoor', rim_count:2, votes:0},
        {court_name:'Nichols', court_address: '898 Bloomfield Ave.', court_city: 'Nutley', court_zip: 07110, court_state: 'NJ', court_type: 'outdoor', rim_count:2, votes:0}
      ]);
    });
};

//added extra seed.
