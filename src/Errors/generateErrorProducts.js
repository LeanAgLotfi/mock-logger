export const generateProductsErrorInfo = (products)=>{
    return `Ups! Somethings went wrong, the process is unexpected.
    List of required properties:
    - title : need a string, received ${products.title}
    - description : need a string, received ${products.description}
    - code : need a number, received ${products.code}
    - price : need a number, received ${products.price}
    - stock : need a number, received ${products.stock}
    - category : need a string, received ${products.category}`
}