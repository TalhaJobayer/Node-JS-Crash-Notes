const express = require('express');
const port = process.env.PORT || 9000;
const path = require('path');
const app = express();

// const pagePath = path.join(__dirname+'/services.html');
// or
const pagePath = path.join(__dirname,'Files');
app.use(express.static(pagePath));


app.get('/',(req,res)=>{
    res.send('<h1>This is the Homepage</h1>');
});

// app.get('/services',(req,res)=>{
//     // res.send('<h1>This is the Service Page</h1>');
//     res.sendFile(pagePath);
// });

// or

app.get('/services',(_,res)=>{
    res.sendFile(`${pagePath}/services.html`);
})

app.get('/error',(req,res)=>{
    res.send('<h1>404 bad error</h1>');
});

app.listen(port,()=>{
    console.warn("Server is listening at : ",port);
});