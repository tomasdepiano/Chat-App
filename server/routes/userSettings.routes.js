import { Router } from "express";
import { User } from "../models/index.js";
import bcrypt from "bcrypt";
const userSettingsRouter = Router();

userSettingsRouter.put("/editEmail", async (req, res) => {
  const { email } = req.body;
  const userId = req.session.userId || req.body.userId;
  console.log(req.body);

  const user = await User.update(
    {
      email: email,
    },
    {
      where: {
        userId: userId,
      },
    }
  );
  //   console.log(user);
});

userSettingsRouter.put("/editUsername", async (req, res) => {
  const { username } = req.body;
  const userId = req.session.userId || req.body.userId;
  console.log(username);

  const user = await User.update(
    {
      username: username,
    },
    {
      where: {
        userId: userId,
      },
    }
  );
});

userSettingsRouter.put("/editPassword", async (req, res) => {
  const { password } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hash = await bcrypt.hash(password, salt);
  const userId = req.session.userId || req.body.userId;

  const user = await User.update(
    {
      password: hash,
    },
    {
      where: {
        userId: userId,
      },
    }
  );
});

export default userSettingsRouter;
