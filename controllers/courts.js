const knex = require("../db/knex.js");

module.exports = {
  courtsPage: (req,res) => {
    // knex('users').where('user_city', req.session.user_city).then((results)=>{
    //   knex('courts').where({court_city: req.session.user_city}).then((result)=>{
    //       res.render('courts', {user:results[0], courts:result});
    //       console.log(data);
    if(req.query.city){
      knex('courts').whereRaw('LOWER(court_city) LIKE ?', [req.query.city.toLowerCase()]).then((results)=>{
        res.render('courts', {courtdata: results})
      })
    }else{
      knex('courts').orderBy('votes', 'desc').then((results)=>{
        knex('votes').where('id', req.session.user_id).then((results2)=>{
          res.render('courts', {courtdata: results, votes:results2[0]})
          console.log(results2[0].id);
        })
      })
    }
  },

  search: (req,res) => {
    knex('courts').where('court_city', req.query.city).then(()=>{
      res.render('courts')
      console.log(results);
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
      res.render('tabs/description', {courtdata: results})
    })
  },

  location: (req,res) => {
    knex('courts').where('id', req.params.id).then((results)=>{
      res.render('tabs/location', {courtdata: results})
    })
  },

  images: (req,res) => {
    knex('courts').where('id', req.params.id).then((results1)=>{
      knex('images').where('courts_id', req.params.id).then((results2)=>{
        res.render('tabs/images', {courtdata: results1, imagedata: results2})
      })
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
