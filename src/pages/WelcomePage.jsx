import Chats from '../components/Chats.jsx';
import Messages from '../components/Messages.jsx';
import FriendsList from '../components/FriendsList.jsx';

export default function WelcomePage() {
  return (
    <main className="bg-blue-400 h-screen flex flex-row justify-center ">
      {/* division for user details & messages */}
      <Chats />

      {/* division for message input and otheruser  */}
      <Messages />
      {/* division for friendsList and buttons(settings&logout)  */}
      <FriendsList />
    </main>
  );
}
