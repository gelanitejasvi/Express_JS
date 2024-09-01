const express = require('express');
const userRoutes = express.Router();
const { registerUser, loginUser , userProfile , updateProfile , deleteProfile , changePassword } = require('../controller/user.controller');
const { verifyToken } = require("../helpers/tokenVerify")


userRoutes.post("/register",registerUser);
userRoutes.post("/login",loginUser);

userRoutes.get("/me", verifyToken , userProfile);
userRoutes.put("/update-Profile", verifyToken , updateProfile);
userRoutes.delete("/delete-Profile",verifyToken,deleteProfile);
userRoutes.post("/change-password",changePassword);



module.exports = userRoutes;
