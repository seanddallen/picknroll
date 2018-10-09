const knex = require("../db/knex.js");

module.exports = {
  newComment: (req,res) => {
    knex('comments').insert({
      comment: req.body.,
      courts_id: req.params.id,
    }).then(() => {
      res.redirect(`courts/${req.params.id}`)
    })
  }
}
