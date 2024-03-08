import { Router } from "express";
import { User } from "../models/index.js";

// import { loginRequired } from "../middlewares/auth.middleware.js";

const authRoutes = Router();

authRoutes.post("/auth", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ where: { username: username } });

  if (user && user.password === password) {
    req.session.userId = user.userId;
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

// Note the `loginRequired` argument passed to the routes below!

authRoutes.post("/api/logout", (req, res) => {
  req.session.destroy();
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
