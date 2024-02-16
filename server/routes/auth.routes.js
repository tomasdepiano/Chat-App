import { Router } from "express";
import { User } from "../models/index.js";

import { loginRequired } from "../middlewares/auth.middleware.js";

const authRoutes = Router();

authRoutes.post('/api/auth', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email: email } });

  if (user && user.password === password) {
    req.session.userId = user.userId;
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

// Note the `loginRequired` argument passed to the routes below!

authRoutes.post('/api/logout', loginRequired, (req, res) => {
  req.session.destroy();
  res.json({ success: true });
});

export default authRoutes;