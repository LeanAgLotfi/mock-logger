import { Router } from "express";
import mockProducts from './mock/mock.router.js'
//import addLogger from "../winston/loggs.js";
const router = Router();

router.use('/mockingproducts', mockProducts)
router.use('/loggerTest',(req,res)=>{
    req.json({ message: 'Winstone Test'})
})
export default router 