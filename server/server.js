import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import router from './routes/userRoutes.js'
import cookieparser from 'cookie-parser'
import connectDatabase from './DataBase/connection.js'
import connectDB from './DataBase/connection.js'


dotenv.config()

const app = express()


app.use(express.json())
app.use(cookieparser())
app.use(cors({
    origin: '*',
    allowedHeaders: ['Content-Type', 'Authorization']
}))

connectDB().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server started on port ${process.env.PORT}`)
    })
});


// userRouter
app.use('/api/user', router)
