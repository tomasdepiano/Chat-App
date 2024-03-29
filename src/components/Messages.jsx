import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Input from '../components/Input.jsx';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import CallImage from '../components/CallImage.jsx';
import {
  fetchMessages,
  createMessage,
} from '../redux/actions/messageActions.js';
import axios from 'axios';
import socket from '../socket.js';
import UserIcon from './UserIcon.jsx';

const Messages = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.message.messages);
  const selectedChatId = useSelector((state) => state.chat.selectedChatId);
  const userId = useSelector((state) => state.user.userId);
  const user = useSelector((state) => state.user.user);
  const newMessageRef = useRef(null);
  const friendsUsername = useSelector((state) => state.friend.friendUsername);
  const friendsList = useSelector((state) => state.friend.friendsList);
  const chats = useSelector((state) => state.chat.chats);
  console.log('messages:', messages);
  //useEffect to get the chat
  useEffect(() => {
    if (selectedChatId) {
      axios
        .get(`http://localhost:3501/api/messages/${selectedChatId}`)
        .then((res) => {
          dispatch(fetchMessages(res.data));
        })
        .catch((error) => console.error('Error fetching messages:', error));
      // Fetch messages for the selected chat
    }
  }, [selectedChatId, dispatch]);

  const selectedChat = chats.find((chat) => {
    return chat.chatId === selectedChatId;
  });
  console.log('selectedChat:', selectedChat);

  useEffect(() => {
    const handleMessageReceive = (data) => {
      dispatch(createMessage(data));
    };

    // Listen for 'receive_message' event and handle it with handleMessageReceive
    socket.on('receive_message', handleMessageReceive);
    // Return a cleanup callback to turn off the event listener when the component unmounts
    return () => {
      socket.off('receive_message', handleMessageReceive);
      // socket.disconnect();
    };
  }, [dispatch]);

  //handleSendMessage function
  const handleSendMessage = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        chatId: selectedChatId,
        senderId: userId,
        receiverId: messages?.receiver?.receiverId,
        text: newMessageRef.current.value,
        message: newMessageRef.current.value,
      };
      await axios.post('/api/message', payload);
      socket.emit('send_message', payload);
      newMessageRef.current.value = '';
      fetchUpdatedMessages();
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const fetchUpdatedMessages = () => {
    axios
      .get(`http://localhost:3501/api/messages/${selectedChatId}`)
      .then((res) => {
        dispatch(fetchMessages(res.data));
      })
      .catch((error) => console.error('Error fetching messages:', error));
  };
  console.log('messages:', messages);
  return (
    <div className="bg-white lg:w-2/3 lg:h-screen lg:flex lg:flex-col lg:justify-center lg:items-center md: hidden">
      {/* other user display */}
      <div className=" fixed top-4 w-[48%] h-[80px] bg-gray-100  rounded-full  flex justify-evenly items-center">
        {/* <div className=" cursor-pointer">
          <img
            className=" w-[50px] rounded-full"
            src="https://imgur.com/va1mKO4.png"
          />
        </div> */}
        <div>
          <UserIcon userId={selectedChat?.user?.userId} />
        </div>
        <div>
          <h3 className=" text-lg font-medium">{friendsUsername}</h3>
        </div>
        {/* call button */}
        <div>
          <button>
            <CallImage />
          </button>
        </div>
      </div>
      {/* messages display area */}
      <div className="h-[80%] mt-8 w-full  border-b overflow-y-auto">
        <div className="p-14">
          {messages.length > 0 ? (
            messages.map((msg) => (
              <div key={msg.messageId} className="flex flex-col mb-6">
                <div
                  className={`flex items-center ${
                    userId === msg.userId ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {userId !== msg.userId && <UserIcon userId={msg.userId} />}

                  <div
                    className={`max-w-[80%] rounderd-b-xl p-4 mb-6 
          ${
            userId === msg.userId
              ? 'bg-orange-400 text-white rounded-tl-xl mr-2'
              : 'bg-blue-400 text-white rounded-tr-xl ml-2 '
          }`}
                  >
                    {msg.message}
                  </div>
                  {userId === msg.userId && <UserIcon userId={msg.userId} />}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-lg font-semibold mt-24">
              No Messages or No Conversation Selected
            </div>
          )}
        </div>
      </div>

      {/* input for message */}
      <div className="fixed bottom-2  flex items-center w-96 ">
        <Input
          className=" w-[100%]  ml-1.5 border  "
          placeholder={`message ${user.username} here...`}
          type="text"
          required
          // onChange={(e) => setSendMessage(e.target.value)}
          newMessage={newMessageRef}
        />
        <div className="w-[10%]">
          <button className="w-full" onClick={(e) => handleSendMessage(e)}>
            <ArrowCircleRightOutlinedIcon fontSize="large" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Messages;
