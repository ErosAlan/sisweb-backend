
import { RequestHandler, Request, Response } from "express"; 
import { Empresa } from "../models/empresa"; 
import { Tier } from "../models/tier";
 
// Create and Save a new Product 

//Create new product 
export const createEmpresa: RequestHandler = (req: Request, res: Response) => { 
  //Validate request 
  if (!req.body.nombre_empresa) {
  return res.status(400).json({
    status: "error",
    message: "nombre_empresa is required",
    payload: null
  });
  }
   
// Save Product in the database 
  const empresa = { ...req.body }; 
  Empresa.create(empresa) 
    .then((data: Empresa | null) => { 
      res.status(200).json({ 
        status: "success", 
        message: "Empresa successfully created", 
        payload: data, 
      }); 
    }) 
    .catch((err) => { 
       res.status(500).json({ 
         status: "error", 
         message: "Something happened creating an Empresa. " + err.message, 
         payload: null, 
       }); 
    }); 
}; 


 
// Retrieve all Products from the database. 

// Get all products using Promises 
export const getAllEmpresas: RequestHandler = (req: Request, res: Response) => { 
  //Calling the Sequelize findAll method. This is the same that a SELECT * FROM PRODUCT in a SQL query. 
   
   Empresa.findAll({
    include: [Tier]
   })
   .then((data: Empresa[]) => { 
      return res.status(200).json({ 
         status: "success", 
           message: "Empresas successfully retrieved", 
           payload: data, 
      }); 
    }) 
    .catch((err) => { 
       return res.status(500).json({ 
       status: "error", 
       message: "Something happened retrieving all Empresas. " + err.message, 
       payload: null, 
    }); 
  }); 
}; 

 
// Find a single Product with an id 

/// Get products by Id 
export const getEmpresaById: RequestHandler = (req: Request, res: Response) => { 
  Empresa.findByPk(Number(req.params.id)) 
  .then((data: Empresa | null) => { 
    return res.status(200).json({ 
      status: "success", 
      message: "Empresa successfully retrieved", 
      payload: data, 
    }); 
  }) 
  .catch((err) => { 
    return res.status(500).json({ 
      status: "error", 
      message: "Something happened retrieving all Empresas. " + err.message, 
      payload: null, 
    }); 
  }); 
}; 

 
// Update a Product by the id in the request 

///Modify product 
export const modifyEmpresa: RequestHandler = async (req: Request, res: Response) => {

  const id = Number(req.params.id);

  try {

    const [rowsUpdated] = await Empresa.update(req.body, {
      where: { id_empresa: id }
    });

    if (rowsUpdated === 0) {
      return res.status(404).json({
        status: "error",
        message: "Empresa not found",
        payload: null
      });
    }

    const updatedEmpresa = await Empresa.findByPk(id);

    return res.status(200).json({
      status: "success",
      message: "Empresa successfully updated",
      payload: updatedEmpresa
    });

  } catch (err: any) {
    return res.status(500).json({
      status: "error",
      message: "Something happened updating an empresa. " + err.message,
      payload: null
    });
  }
};

 
// Delete a Product with the specified id in the request 

///Delete product
export const deleteEmpresa: RequestHandler = async (req: Request, res: Response) => {

  const { id_empresa } = req.body;

  try {

    const rowsDeleted = await Empresa.destroy({
      where: { id_empresa }
    });

    if (rowsDeleted === 0) {
      return res.status(404).json({
        status: "error",
        message: "Empresa not found",
        payload: null
      });
    }

    return res.status(200).json({
      status: "success",
      message: "Empresa deleted successfully",
      payload: null
    });

  } catch (error: any) {

    return res.status(500).json({
      status: "error",
      message: "Error deleting Empresa: " + error.message,
      payload: null
    });

  }
};


