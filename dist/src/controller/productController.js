"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.modifyProduct = exports.getProductById = exports.getAllProducts = exports.createProduct = void 0;
const product_1 = require("../models/product");
// Create and Save a new Product 
//Create new product 
const createProduct = (req, res) => {
    //Validate request 
    if (!req.body.nombre_empresa) {
        return res.status(400).json({
            status: "error",
            message: "nombre_empresa is required",
            payload: null
        });
    }
    // Save Product in the database 
    const product = Object.assign({}, req.body);
    product_1.Product.create(product)
        .then((data) => {
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
exports.createProduct = createProduct;
// Retrieve all Products from the database. 
// Get all products using Promises 
const getAllProducts = (req, res) => {
    //Calling the Sequelize findAll method. This is the same that a SELECT * FROM PRODUCT in a SQL query. 
    product_1.Product.findAll()
        .then((data) => {
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
exports.getAllProducts = getAllProducts;
// Find a single Product with an id 
/// Get products by Id 
const getProductById = (req, res) => {
    product_1.Product.findByPk(Number(req.params.id))
        .then((data) => {
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
exports.getProductById = getProductById;
// Update a Product by the id in the request 
///Modify product 
const modifyProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    try {
        const [rowsUpdated] = yield product_1.Product.update(req.body, {
            where: { id_empresa: id }
        });
        if (rowsUpdated === 0) {
            return res.status(404).json({
                status: "error",
                message: "Product not found",
                payload: null
            });
        }
        const updatedProduct = yield product_1.Product.findByPk(id);
        return res.status(200).json({
            status: "success",
            message: "Product successfully updated",
            payload: updatedProduct
        });
    }
    catch (err) {
        return res.status(500).json({
            status: "error",
            message: "Something happened updating a product. " + err.message,
            payload: null
        });
    }
});
exports.modifyProduct = modifyProduct;
// Delete a Product with the specified id in the request 
///Delete product
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_empresa } = req.body;
    try {
        const rowsDeleted = yield product_1.Product.destroy({
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
    }
    catch (error) {
        return res.status(500).json({
            status: "error",
            message: "Error deleting product: " + error.message,
            payload: null
        });
    }
});
exports.deleteProduct = deleteProduct;
//# sourceMappingURL=productController.js.map