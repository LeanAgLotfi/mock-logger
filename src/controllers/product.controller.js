import { apiSuccessResponse } from '../utils/apiSuccess.js';
import ProductsServices from "../services/product.services.js";
import { HTTP_STATUS } from "../Errors/constError.js";

const productsServices = new ProductsServices();

class productController{

    static async getAll(req, res, next){
        const filter = req.query;
        try{
            const products = await productsServices.getProducts(filter)
            const response = apiSuccessResponse(products);
            res.status(HTTP_STATUS.OK).json(response);
        }catch(error){
            next(error);
        }
    } 

    static async addProduct(req, res, next){
        const productPayload = req.body
        try{
            const addProduct = await productsServices.createProduct(productPayload)
            const response = apiSuccessResponse(addProduct)
            res.status(HTTP_STATUS.OK).json(response)
        }catch(error){
            next(error)
        }
    }
}

export default productController;