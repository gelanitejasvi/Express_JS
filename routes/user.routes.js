const express = require('express');
const { registerUser, loginUser , userProfile , updateUser} = require('../controller/user.controller');

// const { addNewUser, getAllUser, getUser, updateUser , deleteUser } = require('../controller/user.controller');
const userRoutes = express.Router();
const {verifyToken} = require("../helpers/tokenVerify");
const { upload } = require("../helpers/imageUpload")

// userRoutes.post("/",addNewUser);
// userRoutes.get("/",getAllUser);
// userRoutes.get("/get-user",getUser);
// userRoutes.put("/",updateUser);
// userRoutes.delete("/",deleteUser);

userRoutes.post("/register",upload.single('profileImage'),registerUser);
userRoutes.post("/login",loginUser);

userRoutes.get("/me",verifyToken,userProfile);
userRoutes.put("/update-profile",verifyToken,updateUser);

module.exports = userRoutes;
