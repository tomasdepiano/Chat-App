import { Router } from "express";
import { User } from "../models/index.js";
import { Friendships } from "../models/index.js";

const getFriendsRoute = Router();

getFriendsRoute.get('/friends/:userId', async (req, res) => {
  const userId = req.params.userId;
  if (!userId) {
    return res.status(400).json({ message: 'User Id is required' })
  }
  try {
    //Fetch all friendships where the user is either the user or the friend
    const friendships = await Friendships.findAll({ include: [{ model: User, as: 'User' }], where: { userId: userId } })
    res.status(200).json(friendships);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching friends.')
  }

});

export default getFriendsRoute;