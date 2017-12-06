//require the mongoose module
var mongoose = require('mongoose');
//define a User schema
var userSchema = new mongoose.Schema({
	last_name: {type: String, required: true},
	email: {type: String, required:true},
	password: {type: String, required: true}
}, {timestamps: true });

//Create the User model by passing the userSchema in to mongoose
mongoose.model('User', userSchema);
//Store the User model in a variable
var User = mongoose.model('User');
