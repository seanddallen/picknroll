const knex = require("../db/knex.js");

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
        image_url: baseAWSURL + uploadData.Key,
        courts_id: req.params.id
      }).then(()=>{
        res.redirect('tabs/images');
      })
    }

}
