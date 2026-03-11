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
exports.deleteTier = exports.modifyTier = exports.getTierById = exports.getAllTiers = exports.createTier = void 0;
const tier_1 = require("../models/tier");
// Crear Tier
const createTier = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tier = yield tier_1.Tier.create(req.body);
        return res.status(200).json({
            status: "success",
            message: "Tier successfully created",
            payload: tier
        });
    }
    catch (err) {
        return res.status(500).json({
            status: "error",
            message: "Error creating tier: " + err.message,
            payload: null
        });
    }
});
exports.createTier = createTier;
// Obtener todos los tiers
const getAllTiers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tiers = yield tier_1.Tier.findAll();
        return res.status(200).json({
            status: "success",
            message: "Tiers successfully retrieved",
            payload: tiers
        });
    }
    catch (err) {
        return res.status(500).json({
            status: "error",
            message: "Error retrieving tiers: " + err.message,
            payload: null
        });
    }
});
exports.getAllTiers = getAllTiers;
// Obtener tier por id
const getTierById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tier = yield tier_1.Tier.findByPk(Number(req.params.id));
        return res.status(200).json({
            status: "success",
            message: "Tier successfully retrieved",
            payload: tier
        });
    }
    catch (err) {
        return res.status(500).json({
            status: "error",
            message: "Error retrieving tier: " + err.message,
            payload: null
        });
    }
});
exports.getTierById = getTierById;
const modifyTier = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    try {
        const [rowsUpdated] = yield tier_1.Tier.update(req.body, {
            where: { tier_id: id }
        });
        if (rowsUpdated === 0) {
            return res.status(404).json({
                status: "error",
                message: "Tier not found",
                payload: null
            });
        }
        const updatedTier = yield tier_1.Tier.findByPk(id);
        return res.status(200).json({
            status: "success",
            message: "Tier successfully updated",
            payload: updatedTier
        });
    }
    catch (err) {
        return res.status(500).json({
            status: "error",
            message: "Something happened updating tier. " + err.message,
            payload: null
        });
    }
});
exports.modifyTier = modifyTier;
const deleteTier = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    try {
        const rowsDeleted = yield tier_1.Tier.destroy({
            where: { tier_id: id }
        });
        if (rowsDeleted === 0) {
            return res.status(404).json({
                status: "error",
                message: "Tier not found",
                payload: null
            });
        }
        return res.status(200).json({
            status: "success",
            message: "Tier deleted successfully",
            payload: null
        });
    }
    catch (err) {
        return res.status(500).json({
            status: "error",
            message: "Error deleting tier: " + err.message,
            payload: null
        });
    }
});
exports.deleteTier = deleteTier;
//# sourceMappingURL=tierController.js.map