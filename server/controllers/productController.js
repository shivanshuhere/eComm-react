import Product from "../models/ProductModel.js";


const addProduct = async (req, res) => {

    const body = req.body;
    const { name, image, price, category, description } = body;

    try {
        if (!name || !image || !price || !category || !description) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const product = await Product.create({ name, image, price, category, description });
        res.status(201).json({
            message: "Product added successfully",
            data: product,
            success: true
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export { addProduct };

