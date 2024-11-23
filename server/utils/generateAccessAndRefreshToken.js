import jwt from 'jsonwebtoken'
import User from '../models/UserModel.js'


const generateAccessToken = async (userId) => {
    try {
        const user = await User.findById(userId)

        const accessToken = await jwt.sign({ id: user._id, email: user.email }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '2h' })
        return {accessToken}
    } catch (error) {
        return {
            message: error.message,
            error: error,
        }
    }
}

const generateRefreshToken = async (userId) =>{
    try {
        const user = await User.findById(userId)

        const refreshToken = await jwt.sign({ _id: user._id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' })
        user.refreshToken = refreshToken
        await user.save()

        return {refreshToken}

        
    } catch (error) {
        return {
            message: error.message,
            error: error,
        }
    }
}

export {
    generateAccessToken,
    generateRefreshToken
}
