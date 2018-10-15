var mongoose = require('mongoose');


var productSchema = new mongoose.Schema({
	 pid: {type: Number, required: true},
	 name: {type: String, required: true},
	 price: Number,
	 rating: {type: Number, "default": 0, min: 0, max: 5}
});


var Product  = mongoose.model('Product', productSchema);