import { Router } from "express";



import createAcountRoutes from "./createAccount.routes.js";
import authRoutes from "./auth.routes.js";
import chats from "./createChat.routes.js";
import getMessages from "./getMessages.routes.js";

const router = Router();

router.use("/api", createAcountRoutes);
router.use("/api", authRoutes);
router.use('/api', chats);
router.use('/api', getMessages)


export default router;
