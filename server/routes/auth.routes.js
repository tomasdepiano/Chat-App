import { Router } from "express";
import { User } from "../models/index.js";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config({ path: 'server/routes/.env' });


const authRoutes = Router();

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  console.error('JWT_SECRET is not defined.');
  process.exit(1); // Stop the process if the secret is not defined
}
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
    // const token = jwt.sign(
    //   {
    //     userId: user.userId,
    //     username: user.username
    //   },
    //   JWT_SECRET,
    //   { expiresIn: '3h' }
    // )
    req.session.userId = user.userId;
    res.json({
      success: true,
      // token: token, //the token is sent to the client
      userId: req.session.userId,
      email: user.email,
      username: user.username,
    });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});


// authRoutes.post("/checkUser", async (req, res) => {
//   // get the token from the Authorization header
//   const authHeader = req.headers.authorization;
//   console.log('authHeader Response:', req.headers);
//   const token = authHeader && authHeader.split(' ')[1];

//   if (!token) {
//     return res.status(401).json({ success: false, message: 'No token provided.' });
//   }

//   try {
//     // Verify the token using the JWTsecretKey
//     const decoded = jwt.verify(token, JWT_SECRET);
//     const user = await User.findByPk(decoded.userId);

//     if (!user) {
//       return res.status(404).json({ success: false, message: 'User not found.' });
//     }

//     res.json({
//       success: true,
//       userId: user.userId,
//       email: user.email,
//       username: user.username,
//     });
//   } catch (error) {
//     res.status(401).json({ success: false, message: 'Invalid token.' });
//   }
// });


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
