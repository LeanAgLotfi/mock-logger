export default class customError{
    static createError({name="Error", cause, massage, code=1}){
        const error = new Error(massage,{cause});
        error.name = name;
        error.code = code;
        throw error;
    }
}