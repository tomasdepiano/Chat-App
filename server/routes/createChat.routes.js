import { Router } from "express";
import Chats from '../models/Chats.model.js';

const chats = Router();
// creating(initiating) chat or conversation
chats.post('/chats', async (req, res) => {
  try {
    const { senderId, receiverId } = req.body;
    const existingChat = await Chats.findOne({
      where: { senderId, receiverId }
    });
    if (existingChat) {
      res.status(200).json({ chatId: existingChat.chatId })
    } else {
      const newChat = new Chats({ senderId, receiverId });

      await newChat.save();
      res.status(200).json({ chatId: newChat.chatId });
    }
  } catch (error) {
    console.log('Error:', error);
    res.status(500).json({ message: "chat creation failed" });
  }

})

export default chats;