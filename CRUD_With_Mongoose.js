const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/Node-Tut");

const ProductSchema = new mongoose.Schema({
    name:String,
    price:Number,
    category:String
});

const saveDB = async () => {
    const products = mongoose.model('nodejs',ProductSchema);
    let data = new products({name:'tecno pova',price:12500});
    let result = await data.save();
    console.log(result);
}

const insertDB = async () => {
    const products = mongoose.model('nodejs',ProductSchema);
    let data = await products.insertOne({name:'Alex',price:10,category:'Student'});
    let result = await data.save();
    console.log(result);
}

const findDB = async () => {
    const products = mongoose.model('nodejs',ProductSchema);
    let data = await products.findOne({name:'Alex'});
    console.log(data);
}

const deleteDB = async () => {
    const products = mongoose.model('nodejs',ProductSchema);
    let data = await products.deleteOne({name:'Alex'});
    console.log(data);
}

const updateDB = async () => {
    const products = mongoose.model('nodejs',ProductSchema);
    let data = await products.updateOne({name:'Alex'},
    {$set:{name:'Lovish'}});
    console.log(data);
}

saveDB();
insertDB();
findDB();
deleteDB();
updateDB();