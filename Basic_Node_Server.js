const http = require('http');
const port = process.env.PORT || 6000;

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    if(req.url === '/home'){
        res.end("<h1>This is Home Page</h1>");
    }
    else if(req.url === '/about'){
        res.end("<h1>This is About Page</h1>");
    }
    else{
        res.statusCode = 404;
        res.end("404 bad error");
    }
});

server.listen(port, ()=>{
    console.log("Server has started at: ",port);
});