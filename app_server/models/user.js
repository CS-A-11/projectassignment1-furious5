var mongoose = require('mongoose');


var userSchema = new mongoose.Schema({
	 uid: {type: Number, required: true},
	 username: String,
	 password: {type: String, required: true, min: 6},
	 address: String,
	 PhoneNo: String,
	 email: String
});

var user  = mongoose.model('User', userSchema);