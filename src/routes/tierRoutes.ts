import { Router } from "express";
import { createTier, getAllTiers, getTierById, modifyTier, deleteTier } from "../controller/tierController";


const tierRouter: Router = Router();

tierRouter.get("/", getAllTiers);

tierRouter.get("/:id", getTierById);

tierRouter.post("/", createTier);

tierRouter.patch('/:id', modifyTier);

tierRouter.delete('/:id', deleteTier);

export default tierRouter;