import { Router } from "express";
import {
    addParticipant,
    getDatabase
} from "../controllers/ova.controller.js";



const router = Router();

router.post("/participant", addParticipant);
router.get("/db", getDatabase);




export default router;