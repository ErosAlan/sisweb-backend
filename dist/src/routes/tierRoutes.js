"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tierController_1 = require("../controller/tierController");
const tierRouter = (0, express_1.Router)();
tierRouter.get("/", tierController_1.getAllTiers);
tierRouter.get("/:id", tierController_1.getTierById);
tierRouter.post("/", tierController_1.createTier);
tierRouter.patch('/:id', tierController_1.modifyTier);
tierRouter.delete('/:id', tierController_1.deleteTier);
exports.default = tierRouter;
//# sourceMappingURL=tierRoutes.js.map