const knex = require("../db/knex.js");

module.exports = {
  createGame: (req,res) => {
    knex('games').insert({
      game_name: req.body.,
      game_type: req.body.,
      game_skill: req.body.,
      game_day: req.body.,
      game_time: req.body.,
      ampm: req.body.,
      courts_id: req.params.id
    }).then(()=>{
      res.redirect()
    })
  }
}
