const express = require('express');
const EventEmmiter = require('events');
const app = express();
const event = new EventEmmiter();

let count = 0;

event.on('count',()=>{
    count += 1;
    console.log('Count : ',count);
});

// Called this event only once

event.once('greet',()=>{
    console.log('Hello Sir');
});

app.get('/',(req,res)=>{
    res.send("Event has been called by the user");
    event.emit('greet');
    event.emit('count');
});

app.listen(5000);