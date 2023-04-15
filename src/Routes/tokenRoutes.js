import { Router } from "express";
import TokenContoller from "../Controllers/TokenContoller.js";

const router = Router();

// router.post("/refresh", TokenContoller.refreshToken);
router.post("/validate", TokenContoller.validateToken);

export default router;