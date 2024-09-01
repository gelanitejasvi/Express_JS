const User = require("../model/user.model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// // Add New User

exports.addNewUser = async (req,res) => {
    try{
        // console.log(req.body);
        const{ firstName, lastName, email, hobbies, address, age } = req.body;
        let user = await User.findOne({email : email,isDelete:false});
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
        let users = await User.find({isDelete:false});
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


// // Delete User

// exports.deleteUser = async(req,res) =>{
//     try {
//         let user = await User.findById({_id:req.query.userId,isDelete:false});
//         if(!user){
//             return res.status(404).json({message:'User Not Found....'});
//         }
//         // user = await User.deleteOne({_id:user._id});
//         // user = await User.findByIdAndDelete(user._id);
//         // user = await User.findOneAndDelete(user._id);

//         user=await User.findByIdAndUpdate(
//             user._id,
//             { $set :{isDelete:true}},
//             { new:true}
//         );
//         res.status(200).json({user,message:'User Delete Success'});
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({message:"Internal Server Error"});
//     }
// };

// Hard delete user

exports.deleteUser = async (req,res) => {
    try {
        let user = await User.findById(req.query.userId);
        if(!user){
            return res.status(404).json({message:"User Not Found...."});
        }
        user = await User.deleteOne({_id:user.id});

        res.status(200).json({user,message:"User Delete Success"});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error"});
        
    }
}

// Soft Delete

exports.deleteUser = async (req,res) => {
    try {
        let user = await User.findOne({_id: req.query.userId} , {isDelete:false});
        console.log(user);

        if(!user){
            return res.status(404).json({message:"User Not Found...."});
        }

        user = await User.findByIdAndUpdate(
            user._id,
            { $set : {isDelete:true}},
            { new : true }
        );
        res.status(200).json({user, message:"User Delete Success"});

    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error...."});
    }
}

// Registration

const registerUser = async (req,res) =>{
    try {
    //    let imagePath="";
       let user = await User.findOne({email:req.body.email, isDelete:false});
       if(user){
        return res.status(400).json({message:"User already exist...."});
       } 
    //    if(req.file){
    //     // console.log(req.file.path);
    //     imagePath = req.file.path.replace(/\\/g,"/");
    //    }
       let hashPassword = await bcrypt.hash(req.body.password,10);
    //    console.log(hashPassword);
       user = await User.create({...req.body , password:hashPassword });
    //    user.save();
       res.status(201).json({user,message:'User Registration Successfully....'});
       
    } catch (error) {
        console.log(error);
        res.status(500).json({ message:"Internal Server Error"});
    }
};


// Login
const loginUser = async(req,res) => {
    try {
        let user = await User.findOne({email:req.body.email,isDelete:false});
        if(!user){
            return res.status(404).json({message:"User Not Found"});
        }
        let matchPassword = await bcrypt.compare(req.body.password,user.password);
        // console.log(matchPassword);
        if(!matchPassword){
            return res.status(400).json({message:'Email or Password not matched.....'});
        }
        let token = await jwt.sign({ userId:user._id },process.env.JWT_SECRET);
        res.status(200).json({message:'Login Success',token});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error"});
        
    }
}

const userProfile = async(req,res) => {
    try {
        res.status(200).json(req.user);
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error"});
    }
}



module.exports = {
                    registerUser,
                    loginUser,
                    userProfile
                }
