import winston from "winston";

const customLevels ={
    levels:{
        fatal:0,
        error:1,
        warning:2,
        info:3,
        debug:4
    },
    colors:{
        fatal:'red',
        error:'magenta',
        warning:'yellow',
        info:'blue',
        debug:'cyan'
    }
}

const logger = winston.createLogger({
    levels: customLevels.levels,
    transports: [
        new winston.transports.Console({
            level:'debug',
            format: winston.format.combine(
                winston.format.colorize({colors:customLevels.colors}),
                winston.format.simple()
            )
        }),    
        new winston.transports.File({filename: 'error.log', level: 'error'}),
        new winston.transports.File({filename: 'warns.log', level: 'warn'}),
    ]
});

export default logger