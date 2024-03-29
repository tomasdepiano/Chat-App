import { DataTypes, Model } from "sequelize";
import util from "util";
import { db } from "../config/db.js";

export default class Friendships extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Friendships.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'user_id'
      },
    },
    friendId: {
      type: DataTypes.INTEGER,

    }
  },
  {
    modelName: "friendships",
    sequelize: db
  }

);


