import options from '../../mongo/uri.js';
import {ProductMongoDao} from './products.mongo.dao.js'

console.log(`Using mongo as persistence method`)


const productsDao = new ProductMongoDao()

     
export const getDaos = () => {
    return {
        productsDao
    }
}
