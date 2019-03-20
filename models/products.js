var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const Product = new Schema ({
	productName: String, 
	price: String, 
    image: String,
    rate: Number,
    foodSize: Array
});

module.exports = mongoose.model('Product', Product);