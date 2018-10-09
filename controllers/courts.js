const knex = require("../db/knex.js");

module.exports = {
  courtsPage: (req,res) => {
    // knex('users').where('user_city', req.session.user_city).then((results)=>{
    //   knex('courts').where({court_city: req.session.user_city}).then((result)=>{
    //       res.render('courts', {user:results[0], courts:result});
    //       console.log(data);
    knex('courts').then((results)=>{
      res.render('courts', {courtdata: results})
    })
      // })
    // }
  },

  search: (req,res) => {
    // knex('courts').where('city', req.body.city).then((results)=>{
    //   res.redirect('courts', {courts:results})
    //   console.log(results)
    // })
  },

  createCourt: (req,res) => {
    knex('courts').insert({
      court_name: req.body.courtname,
      court_address: req.body.courtaddress,
      court_city: req.body.courtcity,
      court_state: req.body.courtstate,
      court_zip: req.body.zip,
      court_type: req.body.courttype,
      rim_count: req.body.rims,
    }).then(()=>{
      res.redirect('/courts')
    })
  },

  courtPage: (req,res) => {
    knex('courts').where('id', req.params.id).then((results)=>{
      res.render('court', {courtdata: results})
    })
  }
}
