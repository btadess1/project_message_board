var mongoose = require('mongoose');
var User = mongoose.model('User');
var session = require('session');
var error = {};
module.exports = {
  main: function(req, res){

    res.render('index', {error:error});
  },
  login: function(req, res){
    User.find({email: req.body.email}, function(err, user){
        if(err) { 
          console.log('Error'); 
        } 
        if (user.length != 0) {
            session.username=req.body.last_name;
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
    user.save(function(err) {
      if(err){
        console.log("something went wrong");
      } else {
        res.redirect('/message/board');
      }
    })
  }
}
