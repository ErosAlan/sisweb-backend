"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const empresaRoutes_1 = __importDefault(require("./routes/empresaRoutes"));
const tierRoutes_1 = __importDefault(require("./routes/tierRoutes"));
const apiRouter = (0, express_1.Router)();
apiRouter.use('/empresa', empresaRoutes_1.default);
apiRouter.use('/tier', tierRoutes_1.default);
apiRouter.get('/', (req, res) => {
    res.send('Hello World!');
});
exports.default = apiRouter;
//# sourceMappingURL=index.js.map