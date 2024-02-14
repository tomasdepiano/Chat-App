import { Datatypes, Model } from "sequelize";
import util from "util";
import { db } from "../config/db";

export default class User extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

User.init(
  {
    userId: {
      type: Datatypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fname: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    lname: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    email: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    password: {
      type: Datatypes.STRING,
      allowNull: false,
    },
  },
  {
    modelName: "user",
    sequelize: db,
  }
);
