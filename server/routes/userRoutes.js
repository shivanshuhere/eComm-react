import { Router } from 'express'
import { register, login }from '../controllers/userController.js'

const router = Router()

router.post('/register', register)
router.post('/login', login)
// Router.post('/logout', logout)
// Router.post('/verifyOtp', verifyOtp)
// Router.post('/resendOtp', resendOtp)

export default router