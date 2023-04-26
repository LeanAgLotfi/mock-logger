import MongoManager from "./db.mongo.js";
import productModel from "../schema/product.schema.js"
import { generateProducts} from "../../utils/mocking.js";

export class ProductMongoDao {
    
    constructor(){
        MongoManager.connect();
    }
    
    async getAll({limit, page, query, sort}) {
        let filter
        if(!query){
            filter =  {}
        }else if(query == 'true'){
            filter = {status: true}
        }else if(query == 'false'){
            filter = {status: false}
        }else{
            filter = {category: query}
        }
        const options = {
            sort: (sort ? {price: sort} : {}),
            limit: limit || 10,
            page: page || 1,
            lean: true
        }
        const products = [];

        for (let i = 1; i <= 101; i++) {
          products.push(generateProducts());
        };
    
        Promise.all([productModel.insertMany(products)]);
        const paginate = await productModel.paginate(filter,options)
        return paginate
    }

    async add(product) {
        await productModel.create(product)
        console.log(`${product.title} added`)
        const newProduct = {
            status: product.status || true,
            ...product
        }
        return newProduct
    }

}