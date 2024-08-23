const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    productName : String,
    price : {
        type: Number
    },
    productCompany : {
        type : String
    },
    validity : {
        type : String
    },
    isDelete:{
        type:Boolean,
        default:false
    }
    
});


module.exports = mongoose.model('product',productSchema)