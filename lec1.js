// // npm init / npm init -y (default)

// const { log } = require('console');
// const express = require('express');
// const server = express();
// // http.createServer();
// // const data = require('./friend.json');
// const fs = require('fs');
// const data = fs.readFileSync('./friend.json','utf-8');
// // console.log(data);
// const morgan = require('morgan');

// // 4.0 version -> body-parser
// // express.json() -> raw / json formate
// // express.urlencoded() -> form
// // express.static()

// server.use(express.json());
// server.use(express.urlencoded({extended : true}));
// server.use("/hello",express.static('public'));
// server.use(morgan('dev'))


// // let middleWare = (req,res,next)=>{
// //     // console.log(req.query);
// //     if(req.query.password === '5305')
// //     {
// //         console.log('Success');
// //         next();        
// //     }
// //     else{
// //         return res.json({message: 'Sorry your way is incorrect!!!'});
// //     }
// // }

// let middleWare = (req,res,next)=>{
//     console.log(req.body);
//     if(req.body.age >= 18)
//     {
//         console.log('Success');
//         next();        
//     }
//     else{
//         return res.json({message: 'Sorry your way is incorrect!!!'});
//     }
// }

// let loggerFun = (req,res,next)=>{
//     console.log(req.url,"\t",req.method,"\t");
//     next();    
// }
// // server.use(loggerFun);
// // application level
// // server.use(middleWare);



// // application level
// // server.use(middleWare);


// // CRUD => Create(POST) , Read(GET) , Update(PUT,PATCH) , Delete(Delete)

// server.get("/",(req,res) =>{
//     res.write('Welcome to Express Server');
//     res.end();
// })

// // server.get("/",(req,res)=>{
// //     res.send('Get Method - 1');
// // })

// server.get("/user",(req,res) =>{
//     res.status(200);
//     res.json({message:'User GET Method'});
// })

// server.post("/user",(req,res) =>{
//     res.status(201);
//     res.json({message:'User POST Method'});
// })

// server.put("/user",(req,res) =>{
//     res.status(201);
//     res.json({message:'User PUT Method'});
// })

// server.patch("/user",(req,res) =>{
//     // res.status(201);
//     res.json({message:'User PATCH Method'});
// })

// server.delete("/user",(req,res) =>{
//     // res.status(206);
//     res.json({message:'User DELETE Method'});
// })

// server.patch("/admin",(req,res) =>{
//     // res.status(201);
//     res.json({message:'Admin PATCH Method'});
// })

// server.delete("/admin",(req,res) =>{
//     // res.status(201);
//     res.json({message:'Admin DELETE Method'});
// })

// server.get("/friend",(req,res) =>{
//     res.status(200);
//     res.json(JSON.parse(data));
// })

// server.listen(5305 , ()=>{
//     console.log(`Server start at http://localhost:5305`);
// });

// // git checkout -b lec1
// // git add . 
// // git commit -m "commit"
// // git push -u origin lec1