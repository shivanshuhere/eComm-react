import mongoose, { Schema } from "mongoose";

const sellerSchema = new Schema(
    {
        fullname: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
            unique: true,
        },
        totalSales: {
            type: Number,
            default: 0,
        },
    },
    { timestamps: true }
);

export default Seller = mongoose.model("sellers", sellerSchema);
