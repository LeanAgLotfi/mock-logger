import { Router } from "express";
import mockProducts from './mock/mock.router.js'
const router = Router();

router.use('/mockingproducts',mockProducts)

export default router 