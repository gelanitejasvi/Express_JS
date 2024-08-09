// npm init / npm init -y (default)

const express = require('express');

// http.createServer();
const server = express();

// CRUD => Create(POST) , Read(GET) , Update(PUT,PATCH) , Delete(Delete)

server.get("/",(req,res) =>{
    res.write('Welcome to Express Server');
    res.end();
})

server.get("/user",(req,res) =>{
    res.status
})


server.listen(5305 , ()=>{
    console.log(`Server start at http://localhost:5305`);
});