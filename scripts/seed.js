import { db } from "../server/config/db.js";
import User from "../server/models/User.model.js";
import Chats from "../server/models/Chats.model.js";
import Messages from "../server/models/Messages.models.js";

console.log("Syncing Database");

await db.sync({ force: true });

console.log("Seeding database...");
