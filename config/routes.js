//Update the name of the controller below and rename the file.
const TEMPLATE = require("../controllers/TEMPLATE.js")
module.exports = function(app){


app.use(authMiddleware);

}



const authMiddleware = (req, res, next) => {
  if(!req.session.user_id){
    res.redirect('/');
  }else{
    next();
  }
}
