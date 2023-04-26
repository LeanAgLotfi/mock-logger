import logger from "./levels.js";

const addLogger = (req,res,next)=>{
    req.logger = logger;
    logger.debug(`[${req.method}] => [${req.url}] - ${new Date().toLocaleDateString()}`)
    next();
}

export default addLogger;