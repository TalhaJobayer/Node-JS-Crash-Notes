const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const database = 'Node-Tut';
const client = new MongoClient(url);

async function dbConnect(){
    let result = await client.connect();
    let db = result.db(database);
    return db.collection('nodejs');
}

const readData = async () => {
    let data = await dbConnect();
    // Read all data
    let response = await data.find({}).toArray();
    // Read a single data by object like id,name
    let response2 = await data.find({name:'Austin'}).toArray();
}

const insertData = async () => {
    let data = await dbConnect();
    // Insert one data
    let response = await data.insertOne({name:"Bishnudev",age:19,hobby:"Gaming"});
    // Insert datas or many data
    let response2 = await data.insertMany({name:"Bishnudev",age:19,hobby:"Gaming"},{name:"Austin",age:21,hobby:"Writer"},{name:"Alex",age:23,hobby:"Developer"});
}

const deleteData = async () => {
    let data = await dbConnect();
    // Delete a data
    let response = await data.deleteOne({name:'Bishnudev'});
    // Delete many data
    let response2 = await data.deleteMany({name:'Bishnudev'},{age:23});
}

const updateData = async () => {
    let data = await dbConnect();
    let response = await data.updateOne(
        {name:'Bishnudev'},{
            $set: {name:'Rahul'}
        }
    )
}

readData();
insertData();
deleteData();
updateData();