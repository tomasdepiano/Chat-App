import { Datatypes, Model } from "sequelize";
import util from "util";
import { db } from "../config/db";

export default class Chats extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Chats.init(
  {
    chatId: {
      type: Datatypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstUser: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    secondUser: {
      type: Datatypes.STRING,
      allowNull: false,
    },
  },
  {
    modelName: "chats",
    sequelize: db,
  }
);
