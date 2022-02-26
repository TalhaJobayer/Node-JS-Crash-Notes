const mongoose = require('mongoose');
const productsSchema = new mongoose.Schema({
    name:String,
    price:Number,
    category:String
});

module.exports = mongoose.model('nodejs',productsSchema);