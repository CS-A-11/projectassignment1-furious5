var mongoose = require('mongoose');


var inventorySchema = new mongoose.Schema({
	 pid: {type: Number, ref: 'product', required: true},
	 name: String,
	 price: Number,
	 quantity: Number
});

var Inventory  = mongoose.model('Inventory', inventorySchema);