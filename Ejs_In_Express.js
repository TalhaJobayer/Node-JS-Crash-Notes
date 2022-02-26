const express = require('express');
const port = process.env.PORT || 9000;
const path = require('path');
const app = express();

const pagePath = path.join(__dirname,'Files');
app.use(express.static(pagePath));

app.set('view engine','ejs');

app.get('/profile',(_,res)=>{
    const user = {
        name:"Bishnudev Khutia",
        age:19,
        hobby:"Web 3.0"
    }
    res.render('profile',{user})
});

app.listen(port,()=>{
    console.warn("Server is listening at : ",port);
});