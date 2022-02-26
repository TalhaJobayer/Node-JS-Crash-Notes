const express = require('express');
require('./config');
const Product = require('./products');
const port = process.env.PORT;
const app = express();
app.use(express.json());

app.post("/create",(req,res)=>{
    let data = new Product(req.body);
    let result = await data.save();
    console.log(result);
    res.send(result);
});

app.listen(port,()=>{
    console.log("Server has started at : ",port);
})