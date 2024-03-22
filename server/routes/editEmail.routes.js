import { Router } from "express";
import { User } from "../models/index.js";

const editEmailRouter = Router();

editEmailRouter.put("/editEmail", async (req, res) => {
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
  console.log(user);
});

export default editEmailRouter;
