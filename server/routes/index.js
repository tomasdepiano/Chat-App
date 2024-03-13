import { Router } from "express";



import createAcountRoutes from "./createAccount.routes.js";
import authRoutes from "./auth.routes.js";
import chats from "./createChat.routes.js";

import createMessageRouter from "./createMessage.routes.js";

import getChats from "./getChat.route.js";


const router = Router();

router.use("/api", createAcountRoutes);
router.use("/api", authRoutes);
router.use('/api', chats);
<<<<<<<< < Temporary merge branch 1
router.use('/api', createMessageRouter)


router.use("/api", getChats);

export default router;
