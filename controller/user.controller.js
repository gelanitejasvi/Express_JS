const User = require("../model/user.model");

// Add New User

exports.addNewUser = async (req,res) => {
    try{
        // console.log(req.body);
        const{ firstName, lastName, email, hobbies, address, age } = req.body;
        let user = await User.findOne({email : email});
        if(user)
            return res.status(400).json({message:"User Already Exist...."});
        user = await User.create({
            firstName,lastName,age,hobbies,email,address
        });

        user.save();
        res.status(201).json({user , message:"User Added"});    
    }catch (error){
        console.log(error);
        res.status(500).json({message : "Internal server Error"});
    }
};

// Get All Users

exports.getAllUser = async (req,res) => {
    try {
        let users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error"});
    }
};

// Get User

exports.getUser = async(req,res) => {
    try {
        // let users = await User.findOne({_id: req.query.userId});
        let user = await User.findById(req.query.userId);
        if(!user)
            return res.status(404).json({message:'User Not Found'});
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error"})
    }
}

// Update User

exports.updateUser = async (req,res) =>{
    try {
        let user = await User.findById(req.query.userId);
        if(!user){
            return res.status(404).json({message:'User Not Found....'});
        }
        // user = await User.updateOne({_id:req.query.userId},{$set:req.body},{new:true});
        user = await User.findByIdAndUpdate(req.query.userId,{$set:req.body},{new:true});
        user.save();
        res.status(202).json({user , message:'User Update Success'});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error..."});
    }
};


// Delete User

exports.deleteUser = async(req,res) =>{
    try {
        let user = await User.findById(req.query.userId);
        if(!user){
            return res.status(404).json({message:'User Not Found....'});
        }
        // user = await User.deleteOne({_id:user._id});
        user = await User.findByIdAndDelete(user._id);
        // user = await User.findOneAndDelete(user._id);
        res.status(200).json({user,message:'User Delete Success'});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error"});
    }
};