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
      allowNull: false,
      references: {
        model: 'users',//model should match the table name for the users
        key: 'userId',
      }
    },
    chatId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'chats',
        key: 'chatId',
      }
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    modelName: "messages",
    sequelize: db,
  }
);
