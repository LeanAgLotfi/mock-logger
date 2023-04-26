import {getDaos} from "../model/mongo/dao.factory.js";
import customError from "../Errors/customError.js";
import { HTTP_STATUS } from "../Errors/constError.js";
import {generateProductsErrorInfo} from '../Errors/generateErrorProducts.js'

const { productsDao } = getDaos();

class ProductsServices{

    async getProducts(filter = {}) {
        const products = await productsDao.getAll(filter)
        const productsPayload ={
            status: 'success',
            payload: products.docs,
            totalPages: products.totalPages,
            prevPage: products.prevPage,
            nextPage: products.nextPage,
            page: products.page,
            hasPrevPage: products.hasPrevPage,
            hasNextPage: products.hasNextPage,
            prevLink: null,
            nexLink: null
        }
        return productsPayload
    } 

    async createProduct(productPayload){
        const { title, description, code, stock, price, category } = productPayload
        if(!title || !description || !code || !price || !stock || !category){
            customError.createError({
                name:'Product creation error',
                cause: generateProductsErrorInfo({title,description, code, price, stock, category}),
                massage:'Error trying to create product',
                code:HTTP_STATUS.BAD_REQUEST
            })
        }
        const newProduct = productsDao.add(productPayload)
        return newProduct;
    }

}

export default ProductsServices;