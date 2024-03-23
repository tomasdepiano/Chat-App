import React, { useEffect } from 'react';
import Input from '../components/Input.jsx';
import { useSelector, useDispatch } from 'react-redux';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import CallImage from '../components/CallImage.jsx';
import { fetchMessages, createMessage } from '../redux/messageActions.js';
import { setSelectedChatId } from '../redux/chatActions.js';
import axios from 'axios';

const Messages = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.messages);
  const selectedChatId = useSelector((state) => state.selectedChatId);
  const messageText = useSelector((state) => state.messageText);
  const userId = useSelector((state) => state.userId);
  const user = useSelector((state) => state.user);
  console.log('users in message.js:', user);
  useEffect(() => {
    if (selectedChatId) {
      axios
        .get(`http://localhost:3501/api/messages/${selectedChatId}`)
        .then((res) => {
          console.log('messages response:', res);
          dispatch(fetchMessages(res.data));
        });
      // Fetch messages for the selected chat
    }
  }, [selectedChatId, dispatch]);
  console.log('messages:', messages);
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (messageText.trim()) {
      console.log('MessageText:', messageText);
      const message = {
        chatId: selectedChatId,
        // text: messageText,
        senderId: userId,
      };
      dispatch(createMessage(message));
      fetchMessages('');
    }
  };
  const setSendMessage = async () => {
    try {
      const payload = {
        chatId: messages?.chatId,
        senderId: user?.id,
        // message: sendmessage, // Ensure this is the correct field name for the message content
        receiverId: messages?.receiver?.receiverId,
      };

      const response = await axios.post('/api/message', payload);
      console.log('resData:>>', response.data);
      setSendMessage(''); // Clear the input field after sending the message
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };
  return (
    <div className="bg-white lg:w-2/3 lg:h-screen lg:flex lg:flex-col lg:justify-center lg:items-center md: hidden">
      {/* other user display */}
      <div className=" fixed top-4 w-[48%] h-[80px] bg-gray-100  rounded-full  flex justify-evenly items-center">
        {/* <Avatar className="" /> */}
        <div className=" cursor-pointer">
          <img
            className=" w-[50px] rounded-full"
            src="https://imgur.com/va1mKO4.png"
          />
        </div>
        <div>
          <h3 className=" text-lg font-medium">User Name</h3>
        </div>
        {/* call button */}
        <div>
          <button>
            <CallImage />
          </button>
        </div>
      </div>
      {/* messages display area */}
      <div className=" h-[80%] mt-8 w-full  border-b overflow-y-auto">
        <div className="p-14">
          {messages.length > 0 ? (
            messages.map((msg) => (
              <div
                key={msg.messageId}
                className={`max-w-[40%] rounded-b-xl p-4 mb-6 ${
                  userId === msg.userId
                    ? 'bg-orange-400 text-white rounded-tl-xl ml-auto'
                    : 'bg-blue-400 rounded-tr-xl'
                }`}
              >
                {msg.message}
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
      <div className="fixed bottom-2 w-[25%] flex items-center ">
        <Input
          className=" w-[95%]  ml-1.5 border  "
          placeholder={`message ${user.username} here...`}
          type="text"
          required
          // onChange={(e) => setSendMessage(e.target.value)}
        />
        <div className="w-[10%]">
          <button className="w-full" onClick={() => handleSendMessage()}>
            <ArrowCircleRightOutlinedIcon fontSize="large" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Messages;
