import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchChats, setSelectedChatId } from "../redux/actions/chatActions.js";
import { useNavigate } from "react-router-dom";
import MapsUgcOutlinedIcon from "@mui/icons-material/MapsUgcOutlined";
import axios from "axios";
import UserIcon from "./UserIcon.jsx";


//Chats component
const Chats = () => {
  const user = useSelector((state) => state.user.user);
  const userId = useSelector((state) => state.user.userId);
  const chats = useSelector((state) => state.chat.chats);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (userId) {
      axios.get(`/api/chats/${userId}`).then((res) => {
        dispatch(fetchChats(res.data)); //here we will fetch when the component mounts or when the userId changes
      });
    }
  }, [userId, dispatch]);

  function screenSize() {
    const width = window.innerWidth;

    if (width < 1024) {
      navigate("/welcome2");
    }
  }

  const handleChatClick = (chatId, user) => {
    dispatch(setSelectedChatId(chatId));
    // dispatch(setFriendUsername(user));
  };

  return (
    <main className="lg:mt-10 lg:ml-2 lg:text-white lg:text-lg lg:w-1/3 xxs:mt-10 xxs:ml-28 xxs:text-white ">
      <div>
        <div className=" flex">
          <UserIcon userId={userId} />
          <span className="font-bold text-2xl text-red-700 ">{user} !</span>
          <button
            className="ml-2"
            title="New Message"
            onClick={() => {
              setShowModal(true);
            }}
          >
            <MapsUgcOutlinedIcon fontSize="large" />
          </button>
        </div>
        {/* <NewMessageModal onClose={closeModal} visible={showModal} /> */}
      </div>
      {/* division for Chats Title */}
      <h2 className=" lg:flex lg:justify-center  lg:mt-8 lg:mb-6 xxs:hidden">
        Chats
      </h2>
      {/* Division for showing conversations */}
      <div className="text-white font-bold p-5 h-[80%] mt-8 overflow-y-auto flex flex-col  space-y-5">
        {chats.length > 0 ? (
          chats.map((chat) => (
            <button
              key={chat.chatId}
              onClick={() => {
                handleChatClick(chat.chatId, chat.user);
                screenSize();
              }}
              className=" lg:justify-center lg:hover:font-bold xxs:justify-center xxs:p-5"
            >
              Conversation with {chat.user.username}{" "}
            </button>
          ))
        ) : (
          <div className="text-center text-lg font-semibold mt-24">
            No Conversations
          </div>
        )}
      </div>
    </main>
  );
};
export default Chats;
