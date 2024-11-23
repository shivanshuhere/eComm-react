import { Router } from "express";
import { productAddToCart } from "../controllers/cartController.js";


const cartRouter = Router()

cartRouter.post('/add', productAddToCart)


export default cartRouter    