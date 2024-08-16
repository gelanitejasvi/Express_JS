// const express = require('express');
// const app = express();
// const morgan = require('morgan');
// const products = require('./product.json');

// app.use(express.json());
// app.use(express.urlencoded({extended:true}));
// app.use(morgan('dev'));   

// app.get("/",(req,res)=>{
//     res.send('welcome to express server');
// })

// // CRUD

// // Add new product create

// app.post("/product",(req,res) =>{
//     // console.log(req.body);
//     products.push(req.body);
//     res.json({ product : req.body,  message:'Product Added Success...'});
    
// });

// // Get All Products - Read

// app.get("/product",(req,res)=>{
//     res.json(products);
// });

// // show all products
// app.get("/product",(req,res)=>{
//     res.json(products);
// });

// // show single products
// app.get("/product/:id",(req,res)=>{
//     let id = +req.params.id;
//     let item = products.find((product)=>product.id === id);
//     res.json(item);
// });

// // Replace data - PUT

// app.put("/product/:id",(req,res) =>{
//     let id = +req.params.id;
//     let productIndex = products.findIndex((product)=> product.id === id);
//     // console.log(productIndex);
//     products.splice(productIndex , 1 , {...req.body});
//     res.json({message:"Product Replace Success"});
// });

// // Update data - PATCH

// app.patch("/product/:id",(req,res)=>{
//     let id = +req.params.id;
//     let productIndex = products.findIndex((product) => product.id === id);
//     console.log(productIndex);
//     const product = products[productIndex];
//     console.log(product);
//     products.splice(productIndex , 1 , {...product , ...req.body});
//     res.json({message:"Product Update Success"}); 
// });

// // Delete data - DELETE

// app.delete("/product/:id",(req,res)=>{
//     let id = +req.params.id;
//     let productIndex = products.findIndex((product) => product.id === id);
//     const product = products[productIndex];
//     products.splice(productIndex,1);
//     res.json({product,message:"Product Delete Success"});
// });


// app.listen(9166,()=>{
//     console.log("server start at http://localhost:9166");
// })