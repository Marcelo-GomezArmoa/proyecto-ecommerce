
import { Router } from 'express';
import { authenticate } from '../middleware/authMiddleware';
import { getProducts, getProductById, createProduct, updateProduct, deleteProduct, searchProducts } from '../controllers/productController';

const router = Router();

router.get('/', getProducts);
router.get('/:id', getProductById);

router.get('/search', searchProducts);

router.post('/', authenticate, createProduct);
router.put('/:id', authenticate, updateProduct);
router.delete('/:id', authenticate, deleteProduct);


export default router; 
