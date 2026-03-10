
import { RequestHandler, Request, Response } from "express"; 
import { Product } from "../models/product"; 
 
 
// Create and Save a new Product 

//Create new product 
export const createProduct: RequestHandler = (req: Request, res: Response) => { 
  //Validate request 
  if (!req.body.nombre_empresa) {
  return res.status(400).json({
    status: "error",
    message: "nombre_empresa is required",
    payload: null
  });
  }
   
// Save Product in the database 
  const product = { ...req.body }; 
  Product.create(product) 
    .then((data: Product | null) => { 
      res.status(200).json({ 
        status: "success", 
        message: "Product successfully created", 
        payload: data, 
      }); 
    }) 
    .catch((err) => { 
       res.status(500).json({ 
         status: "error", 
         message: "Something happened creating a product. " + err.message, 
         payload: null, 
       }); 
    }); 
}; 


 
// Retrieve all Products from the database. 

// Get all products using Promises 
export const getAllProducts: RequestHandler = (req: Request, res: Response) => { 
  //Calling the Sequelize findAll method. This is the same that a SELECT * FROM PRODUCT in a SQL query. 
   
   Product.findAll() 
   .then((data: Product[]) => { 
      return res.status(200).json({ 
         status: "success", 
           message: "Products successfully retrieved", 
           payload: data, 
      }); 
    }) 
    .catch((err) => { 
       return res.status(500).json({ 
       status: "error", 
       message: "Something happened retrieving all products. " + err.message, 
       payload: null, 
    }); 
  }); 
}; 

 
// Find a single Product with an id 

/// Get products by Id 
export const getProductById: RequestHandler = (req: Request, res: Response) => { 
  Product.findByPk(Number(req.params.id)) 
  .then((data: Product | null) => { 
    return res.status(200).json({ 
      status: "success", 
      message: "Products successfully retrieved", 
      payload: data, 
    }); 
  }) 
  .catch((err) => { 
    return res.status(500).json({ 
      status: "error", 
      message: "Something happened retrieving all products. " + err.message, 
      payload: null, 
    }); 
  }); 
}; 

 
// Update a Product by the id in the request 

///Modify product 
export const modifyProduct: RequestHandler = async (req: Request, res: Response) => {

  const id = Number(req.params.id);

  try {

    const [rowsUpdated] = await Product.update(req.body, {
      where: { id_empresa: id }
    });

    if (rowsUpdated === 0) {
      return res.status(404).json({
        status: "error",
        message: "Product not found",
        payload: null
      });
    }

    const updatedProduct = await Product.findByPk(id);

    return res.status(200).json({
      status: "success",
      message: "Product successfully updated",
      payload: updatedProduct
    });

  } catch (err: any) {
    return res.status(500).json({
      status: "error",
      message: "Something happened updating a product. " + err.message,
      payload: null
    });
  }
};

 
// Delete a Product with the specified id in the request 

///Delete product
export const deleteProduct: RequestHandler = async (req: Request, res: Response) => {

  const { id_empresa } = req.body;

  try {

    const rowsDeleted = await Product.destroy({
      where: { id_empresa }
    });

    if (rowsDeleted === 0) {
      return res.status(404).json({
        status: "error",
        message: "Product not found",
        payload: null
      });
    }

    return res.status(200).json({
      status: "success",
      message: "Product deleted successfully",
      payload: null
    });

  } catch (error: any) {

    return res.status(500).json({
      status: "error",
      message: "Error deleting product: " + error.message,
      payload: null
    });

  }
};


