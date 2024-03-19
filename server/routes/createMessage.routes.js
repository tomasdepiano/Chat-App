import { Router } from "express";
import { Chats, Messages } from '../models/index.js';

const createMessageRouter = Router();

//grabbing data from messages model
createMessageRouter.post('/message', async (req, res) => {
  try {
    const { ChatId, senderId, text, receiverId = '' } = req.body;
    if (!senderId || !text)
      return res.status(400).json({ message: "Please fill all required fields" }) // need to fill both senderId and message text


    //if chatId is not provided, create a new Chat
    if (!ChatId && receiverId) {
      const chat = new Chats({
        $or: [{ senderId: userId }, { receiverId: userId }]
      });
      await chat.save();

    } else if (!ChatId && !receiverId) {
      return res.status(400).send('Please provide reciever Id to start a new chat.');
    }
    const newMessage = new Messages({ ChatId, senderId, text })
    await newMessage.save();
    res.status(200).json(newMessage);

  } catch (error) {
    console.log();
    res.status(500).json({ message: "message creation failed." })
  }
});

export default createMessageRouter;