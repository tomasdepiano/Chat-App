import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import Input from "../components/Input.jsx";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import CallImage from "../components/CallImage.jsx";
import { fetchMessages, createMessage } from "../redux/messageActions.js";
import { setSelectedChatId } from "../redux/chatActions.js";
import axios from "axios";
import socket from "../socket.js";

const Messages = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.messages);
  const selectedChatId = useSelector((state) => state.selectedChatId);
  // const messageText = useSelector((state) => state.messageText);
  const userId = useSelector((state) => state.userId);
  const user = useSelector((state) => state.user);
  const newMessageRef = useRef(null);
  const friendsUsername = useSelector((state) => state.friendUsername);
  console.log("users in message.js:", user);

  //socket io connection
  // useEffect(() => {
  //   socket.on('receive_message', (data) => {
  //     console.log('New Message received:', data);
  //   });
  //   return () => {
  //     socket.off('receive_message');
  //   };
  // }, []);

  //useEffect to get the chat
  useEffect(() => {
    if (selectedChatId) {
      axios
        .get(`http://localhost:3501/api/messages/${selectedChatId}`)
        .then((res) => {
          dispatch(fetchMessages(res.data));
        })
        .catch((error) => console.error("Error fetching messages:", error));
      // Fetch messages for the selected chat
    }
  }, [selectedChatId, dispatch]);

  //useEffect to socket.io connection
  useEffect(() => {
    const handleMessageReceive = (data) => {
      dispatch(createMessage(data));
    };

    // Listen for 'receive_message' event and handle it with handleMessageReceive
    socket.on("receive_message", handleMessageReceive);

    // Return a cleanup callback to turn off the event listener when the component unmounts
    return () => {
      // socket.off('receive_message', handleMessageReceive);
      socket.disconnect();
    };
  }, [dispatch]);

  //handleSendMessage function
  const handleSendMessage = async (e) => {
    e.preventDefault();
    // console.log('chatI,senderId fetching:', {
    //   chatId: selectedChatId,
    //   senderId: userId,
    //   text: newMessage.current.value,
    // });
    try {
      const payload = {
        chatId: selectedChatId,
        senderId: userId,
        receiverId: messages?.receiver?.receiverId,
        text: newMessageRef.current.value,
        message: newMessageRef.current.value,
      };

      await axios.post("/api/message", payload);
      socket.emit("send_message", payload);
      newMessageRef.current.value = "";
      fetchUpdatedMessages();
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const fetchUpdatedMessages = () => {
    axios
      .get(`http://localhost:3501/api/messages/${selectedChatId}`)
      .then((res) => {
        dispatch(fetchMessages(res.data));
      })
      .catch((error) => console.error("Error fetching messages:", error));
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
      <div className=" h-[80%] mt-8 w-full  border-b overflow-y-auto">
        <div className="p-14">
          {messages.length > 0 ? (
            messages.map((msg) => (
              <div
                key={msg.messageId}
                className={`max-w-[40%] rounded-b-xl p-4 mb-6 ${
                  userId === msg.userId
                    ? "bg-orange-400 text-white rounded-tl-xl ml-auto"
                    : "bg-blue-400 rounded-tr-xl"
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
          placeholder={`message ${user} here...`}
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
