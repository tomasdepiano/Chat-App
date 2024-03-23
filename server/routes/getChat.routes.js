import { Router } from 'express';
import { User, Chats } from '../models/index.js';

const getChats = Router();

//Getting Chat or conversation

getChats.get('/chats/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    console.log('userId params:', userId);
    //to find chats where userId is either senderId or receiverId
    const chats = await Chats.findAll({
      $or: [{ senderId: userId }, { receiverId: userId }],
    });
    console.log(chats);
    if (!chats) {
      res.send([]); //empty array: no messages found
    }
    const chatUserData = await Promise.all(
      chats.map(async (chat) => {
        //Assuming receiverId is an array and you're looking for first one that isn't the userId
        let chattedId;
        if (chat.senderId !== userId) {
          console.log('if invoked');
          chattedId = chat.senderId;
        } else {
          console.log('else invoked');

          chattedId = chat.receiverId;
        }
        console.log('chattedId', chattedId);
        const user = await User.findOne({ where: { userId: chattedId } });
        console.log('user in chats', user);
        return {
          user: {
            email: user?.email,
            username: user?.username,
            userId: user?.userId
          },
          chatId: chat.chatId
        };
      })
    );
    //sending the chat user data as a response
    res.json(chatUserData);
  } catch (error) {
    console.log('getChats endpoint error:', error);
    res.status(500).json({
      message: 'An error occured while retrieving chat',
      error: error.message,
    });
  }
});

export default getChats;










