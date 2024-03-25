import { Router } from "express";
import { Chats, Messages } from '../models/index.js';

const createMessageRouter = Router();


createMessageRouter.post('/message', async (req, res) => {
  try {

    const { chatId, senderId, text } = req.body;

    if (!chatId || !senderId || !text) {
      console.log('hit 400')
      return res.status(400).json({ message: "Please fill all required fields" }) // need to fill both senderId and message text
    }
    // else if (chatId) {
    //   const chat = new Chats({ senderId: userId });
    //   await chat.save();

    // }
    const newMessage = new Messages({
      chatId,
      userId: senderId,
      message: text
    });

    await newMessage.save();
    return res.status(200).json({ message: 'Message sent successfully' });


  } catch (error) {
    console.log('Error', error);
  }
})
export default createMessageRouter;



