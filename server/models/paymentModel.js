import mongoose, { Schema } from "mongoose";

const paymentSchema = new Schema(
    {
        paymentMode: {
            type: ["COD", "CREDIT", "UPI"],
        },
        orderId: {
            type: mongoose.Types.ObjectId,
            ref: "Order",
            required: true,
        },
        customerId: {
            type: mongoose.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    { timestamps: true }
);

export const Payment = mongoose.model("Payment", paymentSchema);
