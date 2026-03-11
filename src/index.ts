import { Router, Request, Response } from 'express';  
import empresaRoutes from './routes/empresaRoutes';  
import tierRoutes from './routes/tierRoutes';

const apiRouter:Router = Router();  

apiRouter.use('/empresa', empresaRoutes);  

apiRouter.use('/tier', tierRoutes);

apiRouter.get('/', (req:Request, res: Response) => {  
res.send('Hello World!')  
})  

export default apiRouter; 
