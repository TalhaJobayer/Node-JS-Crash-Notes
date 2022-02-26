const express = require('express');
const port = process.env.PORT;
const app = express();
const multer = require('multer');

const uploadFile = multer({
    storage: multer.diskStorage({
        destination: function(req,file,cb){
            cb(null, "uploads")
        },
        filename: function(req, file, cb){
            cb(null, file.fieldname + "-" + Data.now() + ".jpg")
        }
    })
}).single("user_file");

app.post("/create", uploadFile ,(req,res)=>{
    res.send("File is uploaded");
});

app.listen(port,()=>{
    console.log("Server has started at : ",port);
})