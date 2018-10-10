const knex = require("../db/knex.js");
const AWS = require('aws-sdk');
AWS.config.loadFromPath('config.json');                             //config file???
let s3Bucket = new AWS.S3({params: {Bucket: "pnrimages"}});
const baseAWSURL = "https://s3-us-east-2.amazonaws.com/pnrimages/"
module.exports = {

    imagesPage: (req,res) => {
      knex('courts').where('id', req.params.id).then((results1)=>{
        knex('images').where('courts_id', req.params.id).then((results2)=>{
          res.render('tabs/images', {courtdata: results1, imagedata: results2})
          })
        })
    },

    upload: (req,res) => {
      let uploadData = {
        Key: req.body.name,
        Body: req.files.upload.data,
        ContentType: req.files.upload.mimetype,
        ACL: 'public-read'
      }
      s3Bucket.putObject(uploadData, function(err, data){
        if(err){
          console.log(err);
          return
        }
      })
      knex('images').where('courts_id', req.params.id).insert({
        img_url: baseAWSURL + uploadData.Key,
        courts_id: req.params.id
      }).then(()=>{
        res.redirect(`/courts/images/${req.params.id}`);
      })
    }

}
