import { Schema } from "mongoose"

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: Array,
        Max: 2,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})  

export default productSchema