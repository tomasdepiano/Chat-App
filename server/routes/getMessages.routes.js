import { Router } from "express";
import { User, Messages } from "../models/index.js";
const getMessages = Router();

//getting messages

getMessages.get('/messages/:chatId', async (req, res) => {
  try {
    const chatId = req.params.chatId;
    if (chatId === "new") return res.status(200).json([]); // if there is no conversation Id it will return Empty array. 
    // if conversation id is already exist it continue to find that conversation Id and start sending messages
    const messages = await Messages.findAll({ include: User, where: { chatId: chatId } });
    res.status(200).json(messages)
  } catch (error) {
    console.log("Error:", error);
    res.status(500).send('Server Error');
  }
})

export default getMessages;