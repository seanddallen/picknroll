
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('games').del()
    .then(function () {
      // Inserts seed entries
      return knex('games').insert([
        {game_name:'Tri State Tournament', game_type: 'tournament', game_skill: 'competitive', game_day: 'Saturday', game_time: 2, ampm: 'pm',courts_id:1},
        {game_name:'Fry pickup', game_type: 'pickup', game_skill: 'competitive', game_day: 'friday', game_time: 10, ampm: 'am', courts_id:2}
      ]);
    });
};
