import express from 'express';
import { getProducts, getProductById, createProduct, updateProduct, deleteProduct, getTodos } from '../controller/product';

const router = express.Router()

router.get('/products', getProducts);
router.get('/products/:id', getProductById);
router.get('/todo', getTodos);
router.post('/products', createProduct);
router.patch('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

export default router
