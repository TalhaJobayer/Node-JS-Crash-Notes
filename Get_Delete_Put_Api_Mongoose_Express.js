const express = require('express');
require('./config');
const Product = require('./products');
const port = process.env.PORT;
const app = express();
app.use(express.json());

app.get("/search/:key", async (req,res)=>{
    let data = await Product.find(
        {
            "$or":[
                {"name":{$regex:req.params.key}}
            ]
        }
    )
    console.log(data);
    res.send(data);
});

app.listen(port,()=>{
    console.log("Server has started at : ",port);
})