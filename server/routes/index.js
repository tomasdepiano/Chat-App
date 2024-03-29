import { Router } from "express";
import createAcountRoutes from "./createAccount.routes.js";
import authRoutes from "./auth.routes.js";
import chats from "./createChat.routes.js";
import createMessageRouter from "./createMessage.routes.js";
import getMessages from "./getMessages.routes.js";
import getChats from "./getChat.routes.js";
import allUsersRoutes from "./allUsers.routes.js";
import userSettingsRouter from "./userSettings.routes.js";
import createFriendRouter from "./createFriend.routes.js";
import getFriendsRoute from "./getFriends.routes.js";
import dotenv from 'dotenv';
dotenv.config();
const router = Router();

router.use("/api", createAcountRoutes);
router.use("/api", authRoutes);
router.use("/api", chats);
router.use("/api", createMessageRouter);
router.use("/api", getMessages);
router.use("/api", getChats);
router.use("/api", allUsersRoutes);
router.use("/api", userSettingsRouter);
router.use("/api", createFriendRouter);
router.use("/api", getFriendsRoute);

export default router;
