import { Router } from "express";
import { User } from "../models/index.js";
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config({ path: 'server/routes/.env' });


const authRoutes = Router();


authRoutes.post("/auth", async (req, res) => {
  const { username, password } = req.body;
  //find the user by username
  const user = await User.findOne({ where: { username: username } });
  if (!user) {
    return res.status(401).json({ success: false, message: 'User not found' });
  }
  //Check if the provided password matched the stored hashed password
  const passwordIsValid = await bcrypt.compare(password, user.password);
  if (passwordIsValid) {

    req.session.userId = user.userId;
    res.json({
      success: true,
      userId: req.session.userId,
      email: user.email,
      username: user.username,
    });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});


authRoutes.post("/checkUser", async (req, res) => {
  console.log(req.session.userId);
  if (req.session.userId) {
    const user = await User.findByPk(req.session.userId);
    res.json({
      success: true,
      userId: req.session.userId,
      email: user.email,
      username: user.username,
    });
  } else {
    res.json({ success: false });
  }
});
authRoutes.post("/api/logout", (req, res) => {
  res.json({ success: true });
});

export default authRoutes;
