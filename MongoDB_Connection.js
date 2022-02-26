const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const database = 'Node-Tut';
const client = new MongoClient(url);

// 1st Method

async function getData(){
    let result = await client.connect();
    let db = result.db(database);
    let collection = db.collection('nodejs');
}

module.exports = getData();

// 2nd Method

// async function getData(){
//     let result = await client.connect();
//     let db = result.db(database);
//     return db.collection('nodejs');
// }

// getData.then((data)=>{
//     data.find({}).toArray().then((response)=>{
//         console.log(response);
//     })
// })
