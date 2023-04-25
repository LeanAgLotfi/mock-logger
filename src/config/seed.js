import mongoose from "mongoose";
import productModel from "../model/schema/product.schema.js";
import { generateProducts} from "../utils/mocking.js";
import options from "../mongo/uri.js"

mongoose.set("strictQuery", false);
mongoose.connect(options.mongo.uri)
  .then(() => {
    console.log("Conected to Mongo DB successfully!");
    
    const products = [];

    for (let i = 1; i <= 101; i++) {
      products.push(generateProducts());
    };

    return Promise.all([productModel.insertMany(products)]);
  })
  .then(() => console.log("DATA INSERTED"))
  .catch((error) => {
    console.log("There was an error connecting to DB");
    console.error(error.message);
  })
  .finally(() => {
    mongoose.disconnect();
  })