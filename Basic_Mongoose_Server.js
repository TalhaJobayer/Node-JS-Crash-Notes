const mongoose = require('mongoose');

const main = async () => {
    await mongoose.connect("mongodb://localhost:27017/Node-Tut");
    const ProductSchema = new mongoose.Schema({
        name:String,
        price:Number
    });
    const ProductsModel = mongoose.model('nodejs',ProductSchema);
    let data = new ProductsModel({name:'tecno pova',price:12500});
    let result = await data.save();
    console.log(result);
}

main();