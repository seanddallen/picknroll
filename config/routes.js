//Update the name of the controller below and rename the file.
const users = require("../controllers/users.js");
const courts = require("../controllers/courts.js");
const games = require("../controllers/games.js");
const comments = require("../controllers/comments.js");
const votes = require("../controllers/votes.js");
module.exports = function(app){

  app.get('/', users.loginPage);
  app.post('/login', users.login)
  app.post('/register', users.create);


  app.get('/courts', courts.courtsPage);
  app.get('/courts/city/:city', courts.search);
  app.post('/courts/create', courts.createCourt);
  app.post('/courts/vote/:id', votes.courtVote);

  app.get('/courts/:id', courts.courtPage);
  // app.get('/courts/description/:id', courts.description);
  // app.get('/courts/location/:id', courts.location);
  // app.get('/courts/images/:id', courts.images);
  // app.get('/courts/comments/:id', courts.comments);
  app.post('/courts/comments/newcomment', comments.newComment);
  app.post('/games/create', games.createGame);

  app.use(authMiddleware);

}



const authMiddleware = (req, res, next) => {
  if(!req.session.user_id){
    res.redirect('/');
  }else{
    next();
  }
}
