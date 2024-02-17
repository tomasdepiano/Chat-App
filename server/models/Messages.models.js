import { DataTypes, Model } from "sequelize";
import util from "util";
import { db } from "../config/db.js";

export default class Messages extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Messages.init(
  {
    messageId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
    },
    chatId: {
      type: DataTypes.INTEGER,
    },
  },
  {
    modelName: "messages",
    sequelize: db,
  }
);
