const knex = require("../db/knex.js");

module.exports = {
  createGame: (req,res) => {
    knex('games').insert({
      game_name: req.body.gamename,
      game_type: req.body.skill,
      game_skill: req.body.gametype,
      game_day: req.body.gameday,
      game_time: req.body.starttime,
      ampm: req.body.ampm,
      courts_id: req.params.id
    }).then(()=>{
      res.redirect()
    })
  }
}
