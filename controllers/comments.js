const knex = require("../db/knex.js");

module.exports = {
  newComment: (req,res) => {
    knex('comments').where('courts_id', req.params.id).insert({
      comment: req.body.comment,
      courts_id: req.params.id,
    }).then(() => {
      res.redirect(`/courts/comments/${req.params.id}`)
    })
  }
}
