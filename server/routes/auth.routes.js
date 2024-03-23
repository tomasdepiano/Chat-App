import { Router } from "express";
import { User } from "../models/index.js";

import bcrypt from 'bcrypt';

// import { loginRequired } from "../middlewares/auth.middleware.js";

const authRoutes = Router();



authRoutes.post("/auth", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ where: { username: username } });
  console.log('user from auth routes:', user);

  if (!user) {
    return res.json({ success: false, message: 'User not found' });
  }
  const passwordIsValid = await bcrypt.compare(password, user.password);
  if (passwordIsValid) {
    console.log('Hit Password is valid')
    req.session.userId = user.userId;
    res.json({
      success: true,
      userId: req.session.userId,
      email: user.email,
      username: user.username,
    });
  } else {
    console.log('Did Not Hit Password is valid')
    res.json({ success: false, message: 'Invalid credentials' });
  }
});

// Note the `loginRequired` argument passed to the routes below!

authRoutes.post("/api/logout", (req, res) => {
  // req.session.destroy(err => {
  //   if (err) {
  //     return res, json({ success: false, message: 'Unable to logout' })
  //   }
  // });
  res.json({ success: true });
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

export default authRoutes;
