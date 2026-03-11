import { Router } from 'express';  
import { createEmpresa,  
deleteEmpresa,  
getAllEmpresas,  
getEmpresaById,  
modifyEmpresa  
} from '../controller/empresaController'; 

const empresaRouter:Router = Router();  

empresaRouter.get('/', getAllEmpresas);  

empresaRouter.get('/:id', getEmpresaById);  

empresaRouter.post('/', createEmpresa);  

empresaRouter.patch('/:id', modifyEmpresa);  

empresaRouter.delete('/', deleteEmpresa);  

export default empresaRouter; 


