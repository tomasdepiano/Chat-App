import { Router } from "express";

import authRoutes from "./auth.routes.js";

import createAcountRoutes from "./createAccount.routes.js";

const router = Router();

router.use("/api", authRoutes);
router.use("/api", createAcountRoutes);

export default router;
