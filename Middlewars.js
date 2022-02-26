const express = require('express');
const port = process.env.PORT || 8000;

const app = express();

const route = express.Router();

const middleWare = ((req,res,next)=>{
    if(req.query.age >= 18){
        next();
    }
    else{
        res.send("You are underaged to view this content");
    }
});

// app.use(middleWare);

// app.get('/',middleWare,(req,res)=>{
//     res.send('<h1>This is the Homepage</h1>');
// });

// or

route.use(middleWare);

route.get('/',(req,res)=>{
    res.send('<h1>This is the Homepage</h1>');
})

app.get('/services',(req,res)=>{
    res.send('<h1>This is the Service Page</h1>');
});

app.get('/error',(req,res)=>{
    res.send('<h1>404 bad error</h1>');
});

app.use('/',route);

app.listen(port,()=>{
    console.warn("Server is listening at : ",port);
});