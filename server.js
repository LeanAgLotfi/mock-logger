import express from 'express';
import apiRouter from './src/routers/route.js' //route
import path from 'path'
import addLogger from './src/winston/loggs.js'
//import { dirname } from 'path';
//constantes
//const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
//Puerto
const PORT = 8080;


//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(addLogger)
//app.use(express.static(path.resolve(__dirname, './src/public')))

//routes
app.use('/api', apiRouter);
app.use('/',(req,res)=>{
  req.logger.fatal('un mensaje fatal');
  req.logger.warning('un warning');
  req.logger.info('un info');
  req.logger.error('y un error');
  res.json({ message: 'Winstone Test'})
})
//Inicialización
app.listen(PORT, () => {
    console.log("Ready on port => ", PORT);
  });