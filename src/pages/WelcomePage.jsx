import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import io from 'socket.io-client';
import Chats from '../components/Chats.jsx';
import Messages from '../components/Messages.jsx';
import FriendsList from '../components/FriendsList.jsx';
import axios from 'axios';

const socket = io('http://localhost:3500', {
  transports: ['websocket'],
});

export default function WelcomePage() {
  const user = useSelector((state) => state.user);

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected');
    });
    socket.on('receive_message', (data) => {
      setMessageReceived(data.message);
    });
  }, []);
  console.log(user);

  // const sendMessage = () => {
  //   socket.emit("send_message", {
  //     message,
  //   });
  // };

  useEffect(() => {}, []);

  //
  //
  //
  //
  ///

  // const [conversations, setConversations] = useState([]);
  // console.log('user:>>', user);
  // console.log('conversations:>>', conversations);

  // const fetchMessages = async (conversationId) => {
  //   try {
  //     const response = await axios({
  //       method: 'get',
  //       url: 'http://localhost:5044/api/messages/',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       params: {
  //         conversationId,
  //         senderId: user?.id,
  //         message: 'Hello',
  //         receiverId: '',
  //       },
  //     });
  //     console.log('resData:>>', response.data);
  //   } catch (error) {
  //     console.error('Error fetching messages:', error);
  //   }
  // };
  ///
  //
  //
  //

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
