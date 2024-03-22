import { db } from "../config/db.js";
import User from "../models/User.model.js";
import Chats from "../models/Chats.model.js";
import Messages from "../models/Messages.models.js";
import UserData from "./data/seed.json" assert { type: "json" };

console.log("Syncing Database");

await db.sync({ force: true });

console.log("Seeding database...");

const usersInDB = await Promise.all(
  UserData.map(async (data) => {
    const { fname, lname, email, password, username, message } = data;

    const newUser = await User.create({
      fname: fname,
      lname: lname,
      email: email,
      password: password,
      username: username,
    });

    const newChat = await Chats.create({
      senderId: [newUser.userId],
      receiverId: [2],
    });

    const newMessage = await Messages.create({
      userId: newUser.userId,
      chatId: newChat.chatId,
      message: "message",
    });

    return { newUser, newChat, newMessage };
  })
);

console.log(usersInDB);
