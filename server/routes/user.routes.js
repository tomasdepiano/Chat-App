import { Router } from "express";
import { User } from "../models/index.js";

const userRouter = Router();

userRouter.put("/editEmail", async (req, res) => {
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

userRouter.put("/editUsername", async (req, res) => {
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

userRouter.put("/editPassword", async (req, res) => {
  const { password } = req.body;
  const userId = req.session.userId || req.body.userId;

  const user = await User.update(
    {
      password: password,
    },
    {
      where: {
        userId: userId,
      },
    }
  );
});

export default userRouter;
