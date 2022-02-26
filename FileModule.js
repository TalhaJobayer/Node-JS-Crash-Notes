const fs = require('fs');

// Creating a text file with some data
fs.writeFileSync('intro.txt',"Myself Bishnudev Khutia. I am currently learning Node JS framework of Javascript.");

// Reading a text file
const data = fs.readFileSync('./intro.txt','utf8');
console.log(data);