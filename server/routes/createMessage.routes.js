import { Router } from "express";
import { Chats, Messages } from '../models/index.js';

const createMessageRouter = Router();

// //grabbing data from messages model
// createMessageRouter.post('/message', async (req, res) => {
//   try {
//     const { ChatId, senderId, text, receiverId } = req.body;
//     if (!senderId || !text)
//       return res.status(400).json({ message: "Please fill all required fields" }) // need to fill both senderId and message text

//     let chat;
//     //if chatId is not provided, create a new Chat
//     if (!ChatId && receiverId) {
//       chat = new Chats({  // we can also declare const chat= newChats 
//         $or: [{ senderId: userId }, { receiverId: userId }]
//       });
//       await chat.save();

//     } else if (!ChatId && !receiverId) {
//       return res.status(400).send('Please provide reciever Id to start a new chat.');
//     } else {
//       //if chatId is provided, find the existing Chat
//       chat = await Chats.findById(ChatId);
//       if (!chat) {
//         return res.status(404).json({ message: "Chat not found." });

//       }
//     }
//     const newMessage = new Messages({ ChatId: chat._id, senderId, text })
//     await newMessage.save();
//     return res.status(200).json(newMessage);

//   } catch (error) {
//     console.log();
//     res.status(500).json({ message: "message creation failed." })
//   }
// });



createMessageRouter.post('/message', async (req, res) => {
  try {
    console.log(req.body);
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
    const newMessage = new Messages({ chatId: ChatId, userId: senderId, message: text })
    await newMessage.save();
    res.status(200).json({ 'message': 'message sent successfully' });

  } catch (error) {
    console.log('Error', error);
  }
})
export default createMessageRouter;