const express = require('express');
const { registerUser, loginUser , userProfile} = require('../controller/user.controller');

// const { addNewUser, getAllUser, getUser, updateUser , deleteUser } = require('../controller/user.controller');
const userRoutes = express.Router();
// const {verifyToken} = require("../helpers/tokenVerify");

// userRoutes.post("/",addNewUser);
// userRoutes.get("/",getAllUser);
// userRoutes.get("/get-user",getUser);
// userRoutes.put("/",updateUser);
// userRoutes.delete("/",deleteUser);

userRoutes.post("/register",registerUser);
userRoutes.post("/login",loginUser);

// userRoutes.get("/me",verifyToken,userProfile);

module.exports = userRoutes;
