import { Router } from "express";
import { productAddToCart, removeProductFromCart } from "../controllers/cartController.js";


const cartRouter = Router()

cartRouter.post('/add', productAddToCart)
cartRouter.post('/remove', removeProductFromCart)


export default cartRouter    