var mongoose = require('mongoose');
var User = mongoose.model('User');

var error = {};
module.exports = {
  main: function(req, res){

    res.render('index', {error:error});
  },
  login: function(req, res){
    User.find({
      email: req.body.email,
      password:req.body.password
    }).lean().exec(function(err, user){
        if(err) {
          console.log('Error');
        }
        if (user.length != 0) {
            var session = req.session;
            //set username to be displayed in message board
            session.username = user[0].last_name;
            session.auth = true;
            console.log(user);
            error.err =0;
            res.redirect('/message/board');
        }else{
            error.err = 'Invalid user Id or password, try again';
            res.redirect('/');
        }

    })

  },
  register: function(req, res) {
    var user = new User({last_name: req.body.last_name, email: req.body.email, password: req.body.password});
    var session = req.session;
    //set username to be displayed in message board
    session.username = req.body.last_name;
    user.save(function(err) {
      if(err){
        console.log("something went wrong");
      } else {
        res.redirect('/message/board');
      }
    })
  },
  logout: function(req, res) {
    console.log("Logging User Out: " + req.session.username);
    res.redirect("/");
    req.session.auth = false;
  }
}
