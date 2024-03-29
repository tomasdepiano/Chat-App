import User from "./User.model.js";
import Messages from "./Messages.models.js";
import Chats from "./Chats.model.js";
import Friendships from "./Friendships.model.js";


// User and Messages relationship
User.hasMany(Messages, { foreignKey: "userId" });
Messages.belongsTo(User, { foreignKey: "userId" });
//Chats and Messages relationship
Chats.hasMany(Messages, { foreignKey: "chatId" });
Messages.belongsTo(Chats, { foreignKey: "chatId" });

//Friendship relationships
User.hasMany(Friendships, { as: 'Friends', foreignKey: 'userId' });
Friendships.belongsTo(User, { foreignKey: 'UserId', as: 'User' });

User.hasMany(Friendships, { foreignKey: 'friendId' });
Friendships.belongsTo(User, { foreignKey: 'friendId', as: 'Friend' });

//export default can't contain mutiple things in object
export { User, Messages, Chats, Friendships };
