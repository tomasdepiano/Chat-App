import { Router } from "express";
import { User } from "../models/index.js";

const allUsersRoutes = Router();

allUsersRoutes.get("/allUsers", async (req, res) => {
  const AllUsers = await User.findAll({
    attributes: { exclude: ["password", "email"] },
  });
  console.log(AllUsers);
  return res.json(AllUsers);
});

export default allUsersRoutes;
