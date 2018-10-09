const knex = require("../db/knex.js");

module.exports = {
  courtsPage: (req,res) => {
    res.render('courts')
  },

  search: (req,res) => {

  },

  newCourt: (req,res) => {

  },

  createCourt: (req,res) => {

  },

  courtPage: (req,res) => {
    res.render('court')
  }
}
