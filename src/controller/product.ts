import * as productSercvice from '../services/product';
export const getProducts = async (req:any, res:any) => {
    try {
        const response = await productSercvice.getProducts();
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

export const getProductById = async (req:any, res:any) => {
    try {
        const response = await productSercvice.getProductById(Number(req.params.id));
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
}

export const createProduct = async (req:any, res:any) => {
    const { name, price } = req.body
    try {
        const product = await productSercvice.createProduct(name, price); 
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

export const updateProduct = async (req:any, res:any) => {
    const { name, price } = req.body
    try {
        const product = await productSercvice.updateProduct(req.params.id, name, price);
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

export const deleteProduct = async (req:any, res:any) => {
    try {
        const product = await productSercvice.deleteProduct(Number(req.params.id));
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}
export const getTodos = async (req:any, res:any) => {
    try {
        const product = await productSercvice.getTodosList();
        res.status(200).json(product);
    } catch (error) {
        console.log(error)
        res.status(400).json({ msg: error.message })
    }
}
