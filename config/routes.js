//Update the name of the controller below and rename the file.
const users = require("../controllers/users.js");
const courts = require("../controllers/courts.js");
const games = require("../controllers/games.js");
const comments = require("../controllers/comments.js");
const votes = require("../controllers/votes.js");

module.exports = function(app){

  app.get('/', users.loginPage); //COMPLETE
  app.post('/login', users.login) //COMPLETE
  app.post('/register', users.create); //COMPLETE

  app.use(authMiddleware);

  app.get('/courts', courts.courtsPage); //shows all courts
  app.get('/courts/city/:city', courts.search); //COMPLETE

  app.post('/courts/create', courts.createCourt); //COMPLETE
  app.post('/courts/vote/:id', votes.courtVote);

  app.get('/courts/:id', courts.courtPage); //COMPLETE
  app.get('/courts/description/:id', courts.description); //COMPLETE
  app.get('/courts/location/:id', courts.location); //COMPLETE
  app.get('/courts/images/:id', courts.images); //COMPLETE
  app.get('/courts/comments/:id', courts.comments); //COMPLETE

  app.post('/courts/comments/newcomment', comments.newComment);
  app.post('/games/create/:id', games.createGame); //COMPLETE

}



const authMiddleware = (req, res, next) => {
  if(!req.session.user_id){
    res.redirect('/');
  }else{
    next();
  }
}
