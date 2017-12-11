var posts = require('../controllers/posts.js');
var users = require('../controllers/users.js');
module.exports = function(app) {

	app.get('/', function(req, res){
		users.main(req, res);
	})
 	//route for displaying the message board
	app.get('/message/board', function(req, res){
	  	posts.display(req, res);
	 }) 
	 //route for creating a user
	 app.post('/create/user', function(req, res){
	 	users.register(req, res);
	 })  
	 //route for login
	 app.post('/login', function(req, res){
	 	users.login(req, res);
	 })
	app.get('/logout', function(req, res){
		users.logout(req, res);
	});
	// route for creating one comment with the parent post id
	app.post('/post/comment/:id', function (req, res){
	  	posts.comment(req, res);
	});
	//rout for posting a message
	app.post('/post/message', function(req, res){
		posts.post_message(req, res);
	})

}
