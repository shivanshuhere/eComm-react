import { Router } from "express";
import { addProduct } from "../controllers/productController.js";


const productRouter = Router()

productRouter.post('/add', addProduct)


export default productRouter    