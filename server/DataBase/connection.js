import mongoose from "mongoose";


const connectDB = async () => {
    try {
        console.log(process.env.MONGO_URI)
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${connect.connection.host}`);
    } catch (error) {
        console.error(`Database connection failed: ${error.message}`, error);
        process.exit(1);
    }
}

export default connectDB