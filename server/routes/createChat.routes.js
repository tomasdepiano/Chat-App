import { Router } from "express";
import Chats from '../models/Chats.model.js';

const chats = Router();
// creating(initiating) chat or conversation
chats.post('/chats', async (req, res) => {
  const { firstUser, secondUser } = req.body;
  const newChat = new Chats({ firstUser, secondUser });

  await newChat.save();
  res.status(200).json({ message: "chat created successfully" });
})

export default chats;