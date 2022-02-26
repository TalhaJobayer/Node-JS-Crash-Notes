// Database Commands

// View all databases
show dbs;
// Create a new or switch databases
use dbName;
// View current database
db;
// Delete a database
db.dropDatabase();

// Collection Commands

// Show collections
show collections;

// Create a collection named 'comments'
db.createCollection('comments');

// Drop a collection named 'comments'
db.comments.drop();

// Row(Document) commands

// Show all Rows in a collection
db.comments.find();

// Show all Rows in a collection (Prettified)
db.comments.find().pretty();

// Find the first row matching the object
db.comments.findOne({name:'Bishnudev'});

// Insert one row
db.comments.insert({
    'name':'Bishnudev',
    'lang':'Javascript',
    'age':'19'
});

// Insert many rows
db.comments.insertMany([{
    'name': 'Bishnudev',
    'lang': 'JavaScript',
    'member_since': 5
    }, 
    {'name': 'Rohan',
    'lang': 'Python',
    'member_since': 3
    },
    {'name': 'Lovish',
    'lang': 'Java',
    'member_since': 4
}]);

// Search in a MongoDB Database
db.comments.find({lang:'Python'});

// Limit the number of rows in output
db.comments.find().limit(2);

// Count the number of rows in the output
db.comments.find().count();

// Update a row
db.comments.update({name:'Bishnudev'},
{
    name:'Bishnu',
    age:19
}, {upsert:true});

// MongoDB Increment Operator
db.comments.update({name:'Bishnudev'},
{$inc:{
    age:2
}});

// MongoDB Rename Operator
db.comments.update({name:"Bishnudev"},
{$rename:{
    name:"Borun"
}});

// Delete a row
db.comments.remove({name:"Bishnudev"});

// Search with conditions
db.comments.find({age:{lt:18}});
db.comments.find({age:{lte:18}});
db.comments.find({age:{gt:18}});
db.comments.find({age:{gte:18}});