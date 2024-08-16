const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");

// Database connection
mongoose
    .connect("mongodb://127.0.0.1:27017/userdatabase")
    .then(() => console.log(`Database connection established successfully.....`))
    .catch(err => console.log(err));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan("dev"));

app.get("/",(req,res) => {
    res.send("Welcome to Express Server");
});


const productRoutes = require('./routes/product.routes');
const userRoutes = require('./routes/user.routes');


app.get("/",(req,res)=>{
    res.send("Welcome to Express Server");
});


app.use("/api/product",productRoutes);
app.use("/api/user",userRoutes);


app.listen(5305 , ()=>{
    console.log(`Server start at http://localhost:5305`);
});