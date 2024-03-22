import React, { useEffect } from 'react';
import Input from '../components/Input.jsx';
import { useSelector, useDispatch } from 'react-redux';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import CallImage from '../components/CallImage.jsx';
import { fetchMessages } from '../redux/messageActions.js';
import axios from 'axios';
// import { useState } from 'react';
// const Messages = () => {
// const [messages, setMessages] = useState({ messages: [] });
//function to send messages using createMessage API
// const sendMessage = async (message, receiverId) => {
//   try {
//     await axios.post('http://localhost:3501/api/message', {
//       chatId: messages?.chatId,
//       senderId: userId,
//       message,
//       receiverId: messages?.receiver?.receiverId,
//     });
//   } catch (error) {
//     console.error('Error sending message:', error);
//   }
// };

const Messages = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.messages);
  const selectedChatId = useSelector((state) => state.selectedChatId);
  const userId = useSelector((state) => state.userId);
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
          {/* <div className="  max-w-[40%] bg-orange-400 rounded-b-2xl rounded-tr-xl p-4 mb-6 text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
            totam voluptatem eos eius quidem est temporibus maxime maiores,
            laudantium eligendi ut obcaecati dolorem quo sit fuga excepturi
            itaque fugiat ipsam?
          </div>
          <div className=" max-w-[40%] bg-blue-400 rounded-b-2xl rounded-tl-xl p-4 text-white ml-auto ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis quisquam nesciunt laudantium voluptas, recusandae
            repellendus sequi, voluptatum suscipit dolor sapiente non quod iste
            veritatis voluptates! Architecto non sed debitis mollitia.
          </div> */}
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
          placeholder="Type a message ..."
          type="text"
          required
        />
        <div className="w-[10%]">
          <button className="w-full">
            <ArrowCircleRightOutlinedIcon fontSize="large" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Messages;
