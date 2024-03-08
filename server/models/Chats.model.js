import { DataTypes, Model } from "sequelize";
import util from "util";
import { db } from "../config/db.js";

export default class Chats extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Chats.init(
  {
    chatId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    sender: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    receiver: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    modelName: "chats",
    sequelize: db,
  }
);
