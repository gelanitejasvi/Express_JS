const Product = require('../model/product.model');

exports.addNewProduct = (req,res) => {
    console.log(req.body);
    products.push(req.body);
    res.json({product:req.body , message:"Product Added Success"});
};

exports.getAllProducts = (req,res) =>{
    res.json(products);
};

exports.getProduct = (req,res)=>{
    let id = +req.params.id;
    let item = products.find((product) => product.id === id);
    res.json(item);
};

exports.replaceProduct = (req,res) => {
    let id = +req.params.id;
    let productIndex = products.findIndex((product) => product.id === id);
    console.log(productIndex);
    products.splice(productIndex , 1 , {...req.body});
    res.json({message:"Product Replace Success"});
};

exports.updateProduct = (req,res) =>{
    let id = +req.params.id;
    let productIndex = products.findIndex((product) => product.id === id);
    console.log(productIndex);
    const product = products[productIndex];
    console.log(product);
    products.splice(productIndex , 1 , { ...product , ...req.body});
    res.json({message:"Product Update Success"});
};

exports.deleteProduct = (req,res) =>{
    let id = +req.params.id;
    let productIndex = products.findIndex((product) => product.id === id);
    // console.log(productIndex);
    const product = products[productIndex];
    // console.log(product);
    products.splice(productIndex , 1 );
    res.json({message:"Product Update Success"});
};



// Add New Product

exports.addNewProduct = async (req,res) => {
    try{
        console.log(req.body);
        const{ productName , price , productCompany , validity } = req.body;
        let product = await Product.findOne({productName:productName,isDelete:false});
        if(product)
            return res.status(400).json({message:"Product Already Exist...."});
        product = await Product.create({
            productName , price , productCompany , validity
        });

        product.save();
        res.status(201).json({product , message:"Product Added"});    
    }catch (error){
        console.log(error);
        res.status(500).json({message : "Internal server Error"});
    }
};

// Get Product

exports.getProduct = async(req,res) => {
    try {
        // let product = await Product.findOne({_id: req.query.productId});
        let product = await Product.findById(req.query.productId);
        if(!product)
            return res.status(404).json({message:'Product Not Found'});
        res.status(200).json(product);
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error"})
    }
}

// Update Product

exports.updateProduct = async (req,res) =>{
    try {
        let product = await Product.findById(req.query.productId);
        if(!product){
            return res.status(404).json({message:'Product Not Found....'});
        }
        // product = await Product.updateOne({_id:req.query.productId},{$set:req.body},{new:true});
        product = await Product.findByIdAndUpdate(req.query.productId,{$set:req.body},{new:true});
        product.save();
        res.status(202).json({product , message:'Product Update Success'});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error..."});
    }
};


// Delete Product

exports.deleteProduct = async(req,res) =>{
    try {
        let product = await Product.findById({_id:req.query.productId,isDelete:false});
        if(!product){
            return res.status(404).json({message:'Product Not Found....'});
        }
        // product = await Product.deleteOne({_id:product._id});
        // product = await Product.findByIdAndDelete(product._id);
        // product = await Product.findOneAndDelete(product._id);

        product=await Product.findByIdAndUpdate(
            product._id,
            { $set :{isDelete:true}},
            { new:true}
        );
        res.status(200).json({product,message:'Product Delete Success'});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error"});
    }
};






