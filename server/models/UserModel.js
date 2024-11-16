import mongoose , { Schema } from "mongoose";
import jwt from 'jsonwebtoken'

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
})

userSchema.methods.getAccessToken = () => {
    const token = jwt.sign({ id: this._id, email: this.email }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '2h' })
    return token
}

userSchema.methods.getRefreshToken = () => {
    const token = jwt.sign({ id: this._id, email: this.email }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' })
    return token
}

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}

const User = mongoose.model('User', userSchema)