const express = require('express');
// Import your basic mongodb connection by module.exports method
const dbConnect = require('./MongoDB_Connection');
const port = process.env.PORT || 8500;

const app = express();
app.use(express.json());

// Getting data from MongoDb through Express Server
app.get('/data', async (req, res) => {
    let data = await dbConnect();
    let response = await data.find().toArray();
    res.send(response);
});

// Putting data in MongoDb through Postman
app.post('/data', async (req, res) => {
    let data = await dbConnect();
    let response = await data.insertOne(req.body)
    res.send(response);
});

// Updating data from MongoDb through Express Server
app.put('/data', async (req, res) => {
    let data = await dbConnect();
    let response = await data.insertOne({name:'Bishnudev'},{
        $set:{name:'Bikram'}
    });
    res.send(response);
});

// Deleting data from MongoDb through Express Server
app.delete('/data', async (req, res) => {
    let data = await dbConnect();
    let response = await data.deleteOne({name:"Bishnudev"});
    res.send(response);
});

app.listen(port, () => {
    console.log("Server has started at : ", port);
})