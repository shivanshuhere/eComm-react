import { Router } from 'express'
import { register, login, otp }from '../controllers/userController.js'

const router = Router()

router.post('/register', register)
router.post('/login', login)
// Router.post('/logout', logout)
router.post('/otp', otp)
// Router.post('/resendOtp', resendOtp)

export default router