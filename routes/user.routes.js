const express = require('express');
const userRoutes = express.Router();
const { registerUser, loginUser , userProfile } = require('../controller/user.controller');
const { verifyToken } = require("../helpers/tokenVerify")


userRoutes.post("/register",registerUser);
userRoutes.post("/login",loginUser);

userRoutes.get("/me", verifyToken , userProfile);


module.exports = userRoutes;
