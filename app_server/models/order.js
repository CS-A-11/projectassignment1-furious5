var mongoose = require('mongoose');


var orderSchema = new mongoose.Schema({
	 oid: {type: Number, required: true},
	 pid: {type: Number, ref: 'product', required: true},
	 quantity: Number,
	 price: Number
});
	
var Order  = mongoose.model('Order', orderSchema);