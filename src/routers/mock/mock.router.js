import { Router } from "express";
import customError from "../../Errors/customError.js";
import { HTTP_STATUS } from "../../Errors/constError.js";
import generateProductsErrorInfo from '../../Errors/generateErrorProducts.js'

const router = Router();

const products = []

router.get('/', (req, res)=>{
    res.send({status:'success', payload:products})
})


export default router;