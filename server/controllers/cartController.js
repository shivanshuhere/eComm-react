import mongoose from "mongoose";
import Cart from "../models/CartModel.js";
import Product from "../models/ProductModel.js";
import { ObjectId } from "mongodb";


const productAddToCart = async (req, res) => {

    const body = req.body; 

    const { user_id, product_id, quantity } = body;

    try {

        const cart = await Cart.create({
            userId: new mongoose.Types.ObjectId(user_id),
            productId: new mongoose.Types.ObjectId(product_id),
            quantity: quantity
        })

        return res.status(201).json({ message: "Product added to cart successfully",
            data: cart,
            success: true
         });
    } catch (error) {
        return res.status(500).json({ message: error.message,
            error: error
         });
    }
}

const removeProductFromCart = async (req, res) => {
    try {
        const cartId = req.body

        const _id = cartId.cartId

        if (!cartId) {
            return res.status(404).json({ message: "Cart id is required" });
        }

        await Cart.findByIdAndDelete(_id);

        return res.status(200).json({ message: "Product removed from cart successfully" });
        
    } catch (error) {
        return res.status(500).json({ message: error.message,
            error: error
         });
    }

}


export { productAddToCart, removeProductFromCart }