const knex = require("../db/knex.js");

module.exports = {
  courtsPage: (req,res) => {
    if(req.query.city){
      knex('courts').whereRaw('LOWER(court_city) LIKE ?', [req.query.city.toLowerCase()]).then((results)=>{
        res.render('courts', {courtdata: results})
      })
    }else{
      knex('users').where('user_city', req.session.user_city).then((results1)=>{
        knex('courts').orderBy('votes', 'desc').whereRaw('LOWER(court_city) LIKE ?', [req.session.user_city.toLowerCase()]).then((results2)=>{
         res.render('courts', {userdata:results1, courtdata:results2});
        })
      })
    }
  },

  search: (req,res) => {
    knex('courts').where('court_city', req.query.city).then(()=>{
      res.render('courts')
    })
  },

  createCourt: (req,res) => {
    knex('courts').insert({
      court_name: req.body.courtname,
      court_address: req.body.courtaddress,
      court_city: req.body.courtcity,
      court_state: req.body.courtstate,
      court_zip: req.body.zip,
      court_type: req.body.courttype,
      rim_count: req.body.rims
    }).then(()=>{
      res.redirect('/courts')
    })
  },

  courtPage: (req,res) => {
    knex('courts').where('id', req.params.id).then((results1)=>{
      knex('games').where('courts_id', req.params.id).then((results2)=>{
        res.render('court', {courtdata: results1, gamedata: results2})
      })
    })
  },

  description: (req,res) => {
    knex('courts').where('id', req.params.id).then((results)=>{
      knex('users').where('user_city', req.session.user_city).then((results2)=>{
        res.render('tabs/description', {courtdata: results, userdata:results2})
        console.log(results2);
      })
    })
  },

  location: (req,res) => {
    knex('courts').where('id', req.params.id).then((results)=>{
      res.render('tabs/location', {courtdata: results})
    })
  },

  comments: (req,res) => {
    knex('courts').where('id', req.params.id).then((results1)=>{
      knex('comments').orderBy('created_at', 'desc').where('courts_id', req.params.id).then((results2)=>{
        res.render('tabs/comments', {courtdata: results1, commentdata: results2})
      })
    })
  }

}
