import { Router } from 'express';
import { User, Chats } from '../models/index.js';
import { Op } from 'sequelize';


const getChats = Router();

//Getting Chat or conversation

getChats.get('/chats/:userId', async (req, res) => {
  try {
    const userId = +req.params.userId;
    console.log('userId params:', +userId);
    //to find chats where userId is either senderId or receiverId
    const chats = await Chats.findAll({
      where: {
        [Op.or]: [{ senderId: userId }, { receiverId: userId }]
      }
    });
    if (!chats) {
      res.send([]); //empty array: no messages found
    }
    const chatUserData = await Promise.all(
      chats.map(async (chat) => {
        //Assuming receiverId is an array and you're looking for first one that isn't the userId
        let chattedId = chat.senderId === +userId ? chat.receiverId : chat.senderId;
        const user = await User.findOne({ where: { userId: chattedId } });
        return {
          user: {
            email: user?.email,
            username: user?.username,
            userId: user?.userId
          },
          chatId: chat.chatId
        };
      }));
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










