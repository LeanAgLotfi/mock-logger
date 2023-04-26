import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';
const {Schema} = mongoose;

export const productsCollecion = 'mock-products';

const productsSchema = new Schema({
    title: { 
        type: String, 
        required: true
    },
    description: { 
        type: String, 
        required: true
    },
    code: { 
        type: String, 
        required: true, 
        unique: true
    },
    price: { 
        type: Number, 
        required: true
    },
    stock: { 
        type: Number, 
        required: true
    }
});

productsSchema.plugin(mongoosePaginate);
const productModel = mongoose.model(productsCollecion, productsSchema);
export default productModel;