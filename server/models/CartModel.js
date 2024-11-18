import mongoose, { Schema } from "mongoose";

const cartSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    products: [
        {
            productId: {
                type: String,
                required: true
            },
            quantity: {
                type: Number,
                required: true,
                default: 1
            }
        }
    ],
    totalAmount: {
        type: Number,
        required: true,
        default: 0
    }
}, {
    timestamps: true
})      

const Cart = mongoose.model('Cart', cartSchema);

export default Cart