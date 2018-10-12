//Update the name of the controller below and rename the file.
const users = require("../controllers/users.js");
const courts = require("../controllers/courts.js");
const games = require("../controllers/games.js");
const comments = require("../controllers/comments.js");
const votes = require("../controllers/votes.js");
const images = require("../controllers/images.js");


module.exports = function(app){

  app.get('/', users.loginPage); //COMPLETE
  app.post('/login', users.login); //COMPLETE
  app.post('/register', users.create); //COMPLETE
  app.get('/logout', users.logout); //COMPLETE

  app.use(authMiddleware);

  app.get('/courts', courts.courtsPage); //COMPLETE
  app.get('/courts/city/:city', courts.search); //COMPLETE

  app.post('/courts/create', courts.createCourt); //COMPLETE
  app.post('/courts/vote/:id', votes.courtVote); //COMPLETE

  app.get('/courts/:id', courts.courtPage); //COMPLETE
  app.get('/courts/games/:id', courts.games); //COMPLETE
  app.get('/courts/location/:id', courts.location);
  app.get('/courts/comments/:id', courts.comments); //COMPLETE

  app.post('/courts/comments/newcomment/:id', comments.newComment); //COMPLETE
  app.post('/games/create/:id', games.createGame); //COMPLETE

  app.get('/courts/images/:id', images.imagesPage); //COMPLETE
  app.post('/courts/images/upload/:id', images.upload); //COMPLETE


}



const authMiddleware = (req, res, next) => {
  if(!req.session.user_id){
    res.redirect('/');
  }else{
    next();
  }
}
