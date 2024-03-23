import { Router } from "express";
import { User } from "../models/index.js";
import bcrypt from 'bcrypt';
const createAcountRoutes = Router();

createAcountRoutes.post("/createAccount", async (req, res) => {
  const { fname, lname, email, username, password } = req.body;

  console.log(req.body);
  const user = await User.findOne({ where: { email } });

  if (user) {
    res.json({ success: false, message: "Email already in use" });
  } else {
    //generate a salt to hash the password
    const salt = 10;
    bcrypt.hash(password, salt, async (err, hashedPassword) => {
      if (err) {
        res.status(500).json({ success: false, message: "Error hashing password" });
      } else {
        try {
          await User.create({
            fname: fname,
            lname: lname,
            email: email,
            username: username,
            password: hashedPassword,
          });
          res.json({
            success: true,
            message: "Your account has been created, go back and login.",
          });
        } catch (error) {
          res.status(500).json({ success: false, message: "Error creating user" })
        }
      }
    });


  }
});

export default createAcountRoutes;
