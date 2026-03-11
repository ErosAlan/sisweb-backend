"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const empresaController_1 = require("../controller/empresaController");
const empresaRouter = (0, express_1.Router)();
empresaRouter.get('/', empresaController_1.getAllEmpresas);
empresaRouter.get('/:id', empresaController_1.getEmpresaById);
empresaRouter.post('/', empresaController_1.createEmpresa);
empresaRouter.patch('/:id', empresaController_1.modifyEmpresa);
empresaRouter.delete('/', empresaController_1.deleteEmpresa);
exports.default = empresaRouter;
//# sourceMappingURL=empresaRoutes.js.map