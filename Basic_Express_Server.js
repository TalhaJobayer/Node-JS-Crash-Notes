const express = require('express');
const port = process.env.PORT || 8080;

const app = express();

app.get('/',(req,res)=>{
    res.send('<h1>This is the Homepage</h1>');
});

app.get('/services',(req,res)=>{
    res.send('<h1>This is the Service Page</h1>');
});

app.get('/error',(req,res)=>{
    res.send('<h1>404 bad error</h1>');
});

app.listen(port,()=>{
    console.warn("Server is listening at : ",port);
});