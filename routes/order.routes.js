const express = require("express");
const orderRoutes = express.Router();
const{ addNewOrder } = require("../controller/order.controller");
const { verifyToken } = require("../helpers/tokenVerify");
const { getAllCart } = require("../controller/cart.controller");

orderRoutes.post("/",verifyToken,addNewOrder);
// orderRoutes.get("/",verifyToken,getAllCart);

module.exports = orderRoutes;