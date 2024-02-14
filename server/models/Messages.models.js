import { Datatypes, Model } from "sequelize";
import util from "util";
import { db } from "../config/db";

export default class Messages extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Messages.init(
  {
    messageId: {
      type: Datatypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: Datatypes.INTEGER,
    },
    chatId: {
      type: Datatypes.INTEGER,
    },
  },
  {
    modelName: "messages",
    sequelize: db,
  }
);
