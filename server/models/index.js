import User from "./User.model.js";
import Messages from "./Messages.models.js";
import Chats from "./Chats.model.js";

User.hasMany(Messages, { foreignKey: "userId" });
Messages.belongsTo(Chats, { foreignKey: "chatId" });
Messages.belongsTo(User, { foreignKey: "userId" });
Chats.hasMany(Messages, { foreignKey: "chatId" });

//export default can't contain mutiple things in object
export { User, Messages, Chats };
