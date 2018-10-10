const knex = require("../db/knex.js");

module.exports = {
  courtVote: (req,res) => {
    //insert into votes table & update court votes in courts table
    knex('votes').where({users_id: req.session.user_id, courts_id: req.params.id}).then((results)=>{
      if(results.length){
        res.redirect('/courts')
      }else{
        knex('votes').insert({
          users_id: req.session.user_id,
          courts_id: req.params.id
        }).then((results)=>{
          return knex('courts').where('id', req.params.id).increment('votes', 1)
        }).then(()=>{
          res.redirect('/courts')
        })
      }
    })
  }
}
