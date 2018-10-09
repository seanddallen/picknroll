//Update the name of the controller below and rename the file.
const users = require("../controllers/users.js");
const courts = require("../controllers/courts.js");
const games = require("../controllers/games.js");
const comments = require("../controllers/comments.js");
module.exports = function(app){

  app.get('/', users.loginPage);
  app.post('/login', users.login)
  app.post('/register', users.create);


  app.get('/courts', courts.courtsPage);

  app.get('/courts/:city', courts.search);
  app.get('/courts/new', courts.newCourt);
  app.post('/courts/create', courts.createCourt);

  app.get('/games', courts.gamesPage); //courts/:id

  app.post('/games/create', games.createGame);

  app.post('/comments', comments.newComment); //courts/:id/comments

  app.use(authMiddleware);


}



const authMiddleware = (req, res, next) => {
  if(!req.session.user_id){
    res.redirect('/');
  }else{
    next();
  }
}
