import { db } from "../server/config/db.js";
import User from "../server/models/User.model.js";
import Chats from "../server/models/Chats.model.js";
import Messages from "../server/models/Messages.models.js";
import UserData from "./data/seed.json" assert { type: "json" };

console.log("Syncing Database");

await db.sync({ force: true });

console.log("Seeding database...");

const usersInDB = await Promise.all(
  UserData.map(async (data) => {
    const { userId, fname, lname, email, password, username } = data;

    const newUser = await User.create({
      userId: userId,
      fname: fname,
      lname: lname,
      email: email,
      password: password,
      username: username,
    });

    return newUser;
  })
);

console.log(usersInDB);
