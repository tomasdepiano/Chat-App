import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchChats, setSelectedChatId } from '../redux/actions/chatActions.js';
// import { setFriendUsername } from '../redux/actions/friendsActions.js';
import useOpenCloseModal from '../hooks/useOpenCloseModal.jsx';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import AddFriendModal from '../modals/AddFriendModal.jsx';
import axios from 'axios';
import UserIcon from './UserIcon.jsx';
import {
  fetchFriends,
  setFriendUsername,
} from '../redux/actions/friendsActions.js';
//Chats component
const Chats = () => {
  const [showModal, setShowModal, closeModal] = useOpenCloseModal(false);
  const user = useSelector((state) => state.user.user);
  const userId = useSelector((state) => state.user.userId);
  const chats = useSelector((state) => state.chat.chats);
  const friendsList = useSelector((state) => state.friend.friendsList);

  const dispatch = useDispatch();
  // grabing all users
  useEffect(() => {
    if (friendsList) {
      axios.get('/api/allUsers').then((res) => {
        dispatch(addAllUsers(res.data));
      });
    }
  }, [dispatch]);

  useEffect(() => {
    if (userId) {
      axios.get(`/api/chats/${userId}`).then((res) => {
        dispatch(fetchChats(res.data)); //here we will fetch when the component mounts or when the userId changes
      });
    }
  }, [userId, dispatch]);

  const handleChatClick = (chatId, friend) => {
    dispatch(setSelectedChatId(chatId));
    dispatch(setFriendUsername(friend));
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
          <AddFriendModal onClose={closeModal} visible={showModal} />
        </div>
        {/* <NewMessageModal onClose={closeModal} visible={showModal} /> */}
      </div>
      {/* division for Chats Title */}
      <h2 className=" flex justify-center  mt-8 mb-6">Chats</h2>
      {/* Division for showing conversations */}
      <div className="text-white font-bold p-5 h-[80%] mt-8 overflow-y-auto flex flex-col  space-y-5">
        {chats.length > 0 ? (
          chats.map((chat) => (
            <button
              key={chat.chatId}
              onClick={() => handleChatClick(chat.chatId, chat.user)}
              className=" justify-center hover:font-bold"
            >
              <div className=" flex justify-center text-center ">
                <UserIcon
                  className=" mr-2 flex justify-center text-center"
                  userId={chat.user.username}
                />
                <span className=" ml-2 flex justify-center text-center">
                  Conversation with {chat.user.username}
                </span>
              </div>
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
