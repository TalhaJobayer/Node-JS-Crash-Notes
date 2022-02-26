const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'crud');
const filePath = `${dirPath}/new.txt`;

const createFile = () => {
    fs.writeFileSync(filePath,"I'm creating a new file using Node JS");
}

const readFile = () => {
    fs.readFile(filePath,'utf8',(err,item)=>{
        if(!err){
            console.log(`The data is : ${item}`);
        }
    })
}

const deleteFile = () => {
    fs.unlinkSync(filePath);
}

const updateFile = () => {
    fs.appendFileSync(filePath," I am updating the file",(err)=>{
        if(!err){
            console.log('File is updated !');
        }
    });
}

createFile();
readFile();
deleteFile();
updateFile();