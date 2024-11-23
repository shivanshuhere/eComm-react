import mongoose , { Schema } from "mongoose";
import bcrypt from 'bcryptjs'

const userSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    otp: {
        type: String
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    refreshToken: {
        type: String
    }
}, {
    timestamps: true
})


userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}
userSchema.pre("save", fucntion(next){
   if(!this.isModified("password") next()
    bcrypt.hash(this.password, 10)
    next();
})

const User = mongoose.model('User', userSchema)

export default User
