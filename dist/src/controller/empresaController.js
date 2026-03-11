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
exports.deleteEmpresa = exports.modifyEmpresa = exports.getEmpresaById = exports.getAllEmpresas = exports.createEmpresa = void 0;
const empresa_1 = require("../models/empresa");
const tier_1 = require("../models/tier");
// Create and Save a new Product 
//Create new product 
const createEmpresa = (req, res) => {
    //Validate request 
    if (!req.body.nombre_empresa) {
        return res.status(400).json({
            status: "error",
            message: "nombre_empresa is required",
            payload: null
        });
    }
    // Save Product in the database 
    const empresa = Object.assign({}, req.body);
    empresa_1.Empresa.create(empresa)
        .then((data) => {
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
exports.createEmpresa = createEmpresa;
// Retrieve all Products from the database. 
// Get all products using Promises 
const getAllEmpresas = (req, res) => {
    //Calling the Sequelize findAll method. This is the same that a SELECT * FROM PRODUCT in a SQL query. 
    empresa_1.Empresa.findAll({
        include: [tier_1.Tier]
    })
        .then((data) => {
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
exports.getAllEmpresas = getAllEmpresas;
// Find a single Product with an id 
/// Get products by Id 
const getEmpresaById = (req, res) => {
    empresa_1.Empresa.findByPk(Number(req.params.id))
        .then((data) => {
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
exports.getEmpresaById = getEmpresaById;
// Update a Product by the id in the request 
///Modify product 
const modifyEmpresa = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    try {
        const [rowsUpdated] = yield empresa_1.Empresa.update(req.body, {
            where: { id_empresa: id }
        });
        if (rowsUpdated === 0) {
            return res.status(404).json({
                status: "error",
                message: "Empresa not found",
                payload: null
            });
        }
        const updatedEmpresa = yield empresa_1.Empresa.findByPk(id);
        return res.status(200).json({
            status: "success",
            message: "Empresa successfully updated",
            payload: updatedEmpresa
        });
    }
    catch (err) {
        return res.status(500).json({
            status: "error",
            message: "Something happened updating an empresa. " + err.message,
            payload: null
        });
    }
});
exports.modifyEmpresa = modifyEmpresa;
// Delete a Product with the specified id in the request 
///Delete product
const deleteEmpresa = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_empresa } = req.body;
    try {
        const rowsDeleted = yield empresa_1.Empresa.destroy({
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
    }
    catch (error) {
        return res.status(500).json({
            status: "error",
            message: "Error deleting Empresa: " + error.message,
            payload: null
        });
    }
});
exports.deleteEmpresa = deleteEmpresa;
//# sourceMappingURL=empresaController.js.map