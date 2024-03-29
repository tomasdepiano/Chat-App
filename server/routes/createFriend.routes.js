import { Router } from "express";
import { Friendships } from "../models/index.js";

const createFriendRouter = Router();

createFriendRouter.post('/addFriend', async (req, res) => {
  const { friendId, userId } = req.body;
  if (userId === friendId) {
    return res.status(400).json({ message: 'Cannot add yourself as a friend' })
  }
  try {
    //Check if the friendship already exists
    const existingFriendship = await Friendships.findOne({
      where: {
        userId: userId, friendId: friendId
      }
    });
    if (existingFriendship) {
      return res.status(409).json({ message: 'Friendship already exists.' })
    }
    //create new friendship
    const newFriendship = await Friendships.create({ userId, friendId });
    res.status(201).json(newFriendship);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error processing friend request.')
  }
})

export default createFriendRouter;