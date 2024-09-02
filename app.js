require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const port = process.env.PORT;
const dbURL = process.env.MONGO_URI;
const path = require('path');
// const userRoutes = require('./routes/user.routes');
const { addtoCart} = require("./controller/cart.controller");
const cartRoutes = require('./routes/cart.routes');
const orderRoutes = require('./routes/order.routes');


// const uri = process.env.Mongo_URI
// Database connection
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log(`Database connection established successfully.....`))
    .catch(err => console.log(err));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan("dev"));
app.use("/public/images",express.static(path.join(__dirname , 'public/images')))

app.get("/",(req,res) => {
    res.send("Welcome to Express Server");
});


const productRoutes = require('./routes/product.routes');
// const userRoutes = require('./routes/user.routes');


app.get("/",(req,res)=>{
    res.send("Welcome to Express Server");
});


// app.use("/api/product",productRoutes);
// app.use("/api/user",userRoutes);
// app.use('/api',userRoutes);
app.use('/api/cart',cartRoutes);
app.use('/api/order',orderRoutes);


app.listen(port , ()=>{
    console.log(`Server start`);
});