import { Router } from "express";;
import productController from "../../controllers/product.controller.js";

const router = Router();

router.get('/', productController.getAll)
router.post('/', productController.addProduct)

export default router;