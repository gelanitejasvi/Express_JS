const Order = require("../model/order.model");
const Cart = require("../model/cart.model");

exports.addNewOrder = async (req,res) =>{
    try {
        let carts = await Cart.find({
            user : req.user._id,
            isDelete : false,
        }).populate("productId");
        // console.log(carts);
        
        let orderItems = carts.map((item) => ({
            productId : item.productId._id,
            quantity : item.quantity,
            price: item.productId.price,
            totalAmount : item.quantity * item.productId.price,
        }));
        // console.log(orderItems);

        let amount = orderItems.reduce(
            (total,item)=>(total += item.totalAmount),
            0
        );

        console.log("Amount:====>",amount);

        let order = await Order.create({
            userId : req.user._id,
            items :orderItems,
            totalPrice:amount,
        });

        await Cart.updateMany(
            {
                user:req.user._id,
                isDelete:false,
            },
            { isDelete : true }
        );
        res.json({message:"Order Placed" , order});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error"})
    }
};


// let find = [
//     {
//         $match : { user:req.user._id , isDelete:false },
//     },
//     {
//         $lookup:
//         {
//             from:"products",
//             localField: "productId",
//             foreignField:"_id",
//             as:"productId"
//         }
//     }
// ];
// let carts = await Cart.aggregate(find);


