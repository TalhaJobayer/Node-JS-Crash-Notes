const express = require('express');
const EventEmmiter = require('events');
const port = process.env.PORT || 1200;
const app = express();
const event = new EventEmmiter();

let count = 0;

event.on('count',()=>{
    count++;
    console.log(`The event has been triggered ${count} times`);
});

app.get('/',(req,res)=>{
    res.send("This is Event Emmiter in javascript");
    event.emit('count');
});

app.listen(port,()=>{
    console.log(`The server has started at ${port}`);
});