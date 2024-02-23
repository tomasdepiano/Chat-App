import { Router } from "express";
import { User } from "../models/index.js";

const createAcountRoutes = Router();

createAcountRoutes.post("/createAccount", async (req, res) => {
  const { fname, lname, email, username, password } = req.body;

  console.log(req.body);
  const user = await User.findOne({ where: { email } });

  if (user) {
    res.json({ success: false, message: "Email already in use" });
  } else {
    User.create({
      fname: fname,
      lname: lname,
      email: email,
      username: username,
      password: password,
    });

    res.json({
      success: true,
      message: "Your account has been created, go back and login.",
    });
  }
});

export default createAcountRoutes;
