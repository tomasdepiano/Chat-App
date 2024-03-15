import { Router } from 'express';
// import Chats from "../models/Chats.model.js";

import { User, Chats } from '../models/index.js';

const getChats = Router();

//Getting Chat or conversation

getChats.get('/chats/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    //to find chats where userId is either senderId or receiverId
    const chats = await Chats.find({
      $or: [{ senderId: userId }, { receiverId: userId }],
    });
    const chatUserData = await Promise.all(
      chats.map(async (chat) => {
        //Assuming receiverId is an array and you're looking for first one that isn't the userId
        const receiverId = chat.receiverId.find(
          (receiver) => receiver !== userId
        );
        const user = await User.findById(receiverId);
        return {
          user: {
            email: user?.email,
            username: user?.username,
          },
          chatId: chat._id,
        };
      })
    );
    //sending the chat user data as a response
    res.json(chatUserData);
  } catch (error) {
    res.status(500).json({
      message: 'An error occured while retrieving chat',
      error: error.message,
    });
  }
});

export default getChats;
