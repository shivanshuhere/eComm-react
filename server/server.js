import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import userRouter from './routes/userRoutes.js'
import cookieparser from 'cookie-parser'
import connectDB from './DataBase/connection.js'
import productRouter from './routes/productRoutes.js'
import cartRouter from './routes/cartRoutes.js'


dotenv.config(
    {
        path: '../.env'
    }
)


const app = express()


app.use(express.json(
    {
        limit: '150kb',
        extended: true 
    }
))
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
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)
