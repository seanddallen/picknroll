const knex = require("../db/knex.js");

module.exports = {
  loginPage: (req,res) => {
    res.render('login');
  },

  login: (req,res) => {
    knex('users').where('email', req.body.email).then((results)=>{
      let user = results[0];
      if(!user){
        res.redirect('/');
        return;
      }
      if(user.password === req.body.password){
        req.session.user_id = user.id;
        req.session.user_city = user.user_city;
        req.session.save(()=>{
          res.redirect('/courts');
        })
      }else{
        res.redirect('/');
      }
    })
  },

  logout: (req,res) => {
    req.session.destroy(()=>{
      res.redirect('/');
    });
  },

  create: (req,res) => {
    knex('users').insert({
      user_name: req.body.username,
      email: req.body.email,
      password: req.body.password,
      user_city: req.body.usercity,
    }).then(()=>{
      res.redirect('/');
    })
  }
}
