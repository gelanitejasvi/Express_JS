const express = require("express");

const productRoutes = express.Router();

const { addNewProduct , getAllProducts , getProduct , replaceProduct , updateProduct , deleteProduct } = require("../controller/product.controller");

// Add new products - create
productRoutes.post("/",addNewProduct);

// Get all products - Read
productRoutes.get("/",getAllProducts);

// Get Single products - Read
productRoutes.get("/:id",getProduct);

// Replace Data - Put
productRoutes.put("/:id",replaceProduct);

// Update Data - Patch
productRoutes.patch("/:id",updateProduct);

// Delete Data - Delete
productRoutes.delete("/:id",deleteProduct);

module.exports = productRoutes