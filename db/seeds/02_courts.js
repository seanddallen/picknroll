
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('courts').del()
    .then(function () {
      // Inserts seed entries
      return knex('courts').insert([
        {court_name:'Palma Park', court_address: '1135 E Dunlap Ave, Phoenix, AZ 85020', court_city: 'Phoenix', court_type: 'outdoor', rim_count:2, votes:5},
        {court_name:'LA Fitness', court_address: '2077 E Camelback Rd, Phoenix, AZ 85016', court_city: 'Phoenix', court_type: 'indoor', rim_count:2, votes:5},
        {court_name:'Pierce Park', court_address: '2150 N 46th St, Phoenix, AZ 85008', court_city: 'Phoenix', court_type: 'indoor', rim_count:2, votes:2},
        {court_name:'West 4th', court_address: '272 6th Ave, New York, NY 10012', court_city: 'Manhattan', court_type: 'indoor', rim_count:2, votes:3},
        {court_name:'Dyckman', court_address: '39 Sherman Ave, New York, NY 10040', court_city: 'Manhattan', court_type: 'indoor', rim_count:2, votes:0},
        {court_name:'Rucker Park', court_address: '280 W 155th St, New York, NY 10039', court_city: 'Manhattan', court_type: 'indoor', rim_count:2, votes:0},
        {court_name:'Nichols', court_address: '898 Bloomfield Ave, Nutley, NJ 07110', court_city: 'Nutley', court_type: 'outdoor', rim_count:2, votes:6},
        {court_name:'The Mecca', court_address: ' 4 Pennsylvania Plaza, New York, NY 10001', court_city: 'Manhattan', court_type: 'outdoor', rim_count:2, votes:6},
        {court_name:'DeMuro', court_address: 'Margaret Avenue Nutley, NJ 07110', court_city: 'Nutley', court_type: 'outdoor', rim_count:2, votes:3}
      ]);
    });
};

//added extra seed.
