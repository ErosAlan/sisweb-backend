import { RequestHandler, Request, Response } from "express";
import { Tier } from "../models/tier";

// Crear Tier
export const createTier: RequestHandler = async (req: Request, res: Response) => {
  try {

    const tier = await Tier.create(req.body);

    return res.status(200).json({
      status: "success",
      message: "Tier successfully created",
      payload: tier
    });

  } catch (err: any) {

    return res.status(500).json({
      status: "error",
      message: "Error creating tier: " + err.message,
      payload: null
    });

  }
};

// Obtener todos los tiers
export const getAllTiers: RequestHandler = async (req: Request, res: Response) => {

  try {

    const tiers = await Tier.findAll();

    return res.status(200).json({
      status: "success",
      message: "Tiers successfully retrieved",
      payload: tiers
    });

  } catch (err: any) {

    return res.status(500).json({
      status: "error",
      message: "Error retrieving tiers: " + err.message,
      payload: null
    });

  }

};

// Obtener tier por id
export const getTierById: RequestHandler = async (req: Request, res: Response) => {

  try {

    const tier = await Tier.findByPk(Number(req.params.id));

    return res.status(200).json({
      status: "success",
      message: "Tier successfully retrieved",
      payload: tier
    });

  } catch (err: any) {

    return res.status(500).json({
      status: "error",
      message: "Error retrieving tier: " + err.message,
      payload: null
    });

  }

};

export const modifyTier: RequestHandler = async (req: Request, res: Response) => {

  const id = Number(req.params.id);

  try {

    const [rowsUpdated] = await Tier.update(req.body, {
      where: { tier_id: id }
    });

    if (rowsUpdated === 0) {
      return res.status(404).json({
        status: "error",
        message: "Tier not found",
        payload: null
      });
    }

    const updatedTier = await Tier.findByPk(id);

    return res.status(200).json({
      status: "success",
      message: "Tier successfully updated",
      payload: updatedTier
    });

  } catch (err: any) {

    return res.status(500).json({
      status: "error",
      message: "Something happened updating tier. " + err.message,
      payload: null
    });

  }

};

export const deleteTier: RequestHandler = async (req: Request, res: Response) => {

  const id = Number(req.params.id);

  try {

    const rowsDeleted = await Tier.destroy({
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

  } catch (err: any) {

    return res.status(500).json({
      status: "error",
      message: "Error deleting tier: " + err.message,
      payload: null
    });

  }

};