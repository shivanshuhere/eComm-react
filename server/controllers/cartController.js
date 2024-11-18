import Cart from "../models/CartModel.js";
import Product from "../models/ProductModel.js";


const productAddToCart = async (req, res) => {

    const body = req.body;          
    const { product_id, quantity } = body;

    const user_id = req.body

    try {
        console.log(product_id, quantity, user_id)
        const product = await Product.findById(product_id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        // const cart = await Cart.findOne({ userId: user_id });
        // if (!cart) {
        //     return res.status(404).json({ message: "Cart not found" });
        // }

        // const existingProduct = Cart.products.find(product => product.productId.toString() === product_id);

        // if (existingProduct) {
        //     existingProduct.quantity += quantity;
        // } else {
        //     Cart.products.push({ productId: product_id, quantity, userId: user_id });
        // }
        // Cart.totalAmount += product.price * quantity;
        // await Cart.save();

        const cart = await Cart.create({
            userId: user_id,
            products: [
                {
                    productId: product_id,
                    quantity: quantity
                }
            ],
            totalAmount: product.price * quantity
        })

        return res.status(201).json({ message: "Product added to cart successfully",
            data: Cart,
            success: true
         });
    } catch (error) {
        return res.status(500).json({ message: error.message,
            error: error
         });
    }
}


export { productAddToCart }