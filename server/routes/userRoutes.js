import { Router } from 'express'
import { register, login, otp, logout, updateUser, addUserAddress, getUserCart, getUser }from '../controllers/userController.js'

const userRouter = Router()

userRouter.post('/otp', otp)
userRouter.post('/register', register)
userRouter.post('/login', login)
userRouter.post('/getuser', getUser)
userRouter.post('/update', updateUser)
userRouter.post('/address', addUserAddress)
userRouter.post('/getcart', getUserCart)
userRouter.post('/logout', logout)


export default userRouter