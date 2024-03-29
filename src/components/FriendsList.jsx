import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  fetchFriends,
  setFriendUsername,
} from '../redux/actions/friendsActions.js';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import Logout from '../components/Logout.jsx';
import Settings from '../components/Settings.jsx';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import GroupMessageModal from '../modals/GroupMessageModal.jsx';
import useOpenCloseModal from '../hooks/useOpenCloseModal.jsx';
import axios from 'axios';
import { setSelectedChatId, createChat } from '../redux/actions/chatActions.js';
import UserIcon from './UserIcon.jsx';
//friendsList component
const FriendsList = () => {
  const [showModal, setShowModal, closeModal] = useOpenCloseModal(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const friendsList = useSelector((state) => state.friend.friendsList);
  const chats = useSelector((state) => state.chat.chats);
  const userId = useSelector((state) => state.user.userId);

  function SettingsPageResponsive() {
    navigate('/settings2');
  }

  function ResponsiveLogoutButton() {
    navigate('/');
  }

  useEffect(() => {
    if (friendsList) {
      axios.get('/api/allUsers').then((res) => {
        dispatch(fetchFriends(res.data));
      });
    }
  }, [dispatch]);

  const handleFriendClick = async (friend) => {
    dispatch(setFriendUsername(friend));
    const existingChat = chats.find((chat) => {
      return chat.user.userId === friend.userId;
    });
    if (existingChat) {
      dispatch(setSelectedChatId(existingChat.chatId));
    } else {
      //create new chat
      try {
        const response = await axios.post('/api/chats', {
          senderId: userId,
          receiverId: friend.userId,
        });
        // dispatch(createChat(response.data));
        dispatch(setSelectedChatId(response.data.chatId));
      } catch (error) {
        console.error('Error createing chat:', error);
      }
    }
  };

  return (
    <div className="w-1/4 flex-none  ">
      <div className="lg:mt-10 lg:ml-10 text-white lg:text-xl lg:w-[80%] lg:flex lg:justify-between  xxs:hidden ">
        {/* <div className="border-2 border-red-400 rounded-lg hover:bg-gray-400 text-black bg-gray-100">
          <button>Add Friend</button>
        </div> */}
        <div className="text-xl flex justify-center text-white font-bold p-2">
          Friends List
        </div>
        <button
          title="Group Chat"
          onClick={() => {
            setShowModal(true);
          }}
        >
          <GroupAddOutlinedIcon fontSize="large" />
        </button>
        <GroupMessageModal onClose={closeModal} visible={showModal} />
      </div>

      <div className="text-white p-10 text-xl">
        {/* code for rendering component */}
        {friendsList && friendsList.length > 0 ? (
          friendsList.map((friend) => {
            return (
              <div
                key={friend.userId}
                className=" m-2 cursor-pointer hover:font-bold flex p-2"
                onClick={() => handleFriendClick(friend)}
              >
                <UserIcon className="ml-2" userId={friend.userId} />
                <span className="ml-2"> {friend.username}</span>
              </div>
            );
          })
        ) : (
          <div>No Friends Found.</div>
        )}
      </div>
      <div className="fixed bottom-[0.5%]">
        {/* responsivepage icons for settings&logout */}
        <div>
          {/* <button className="lg:hidden fixed top-10 border-2 border-red-400 rounded-lg text-black bg-gray-100 ">
            Add Friend
          </button> */}
          <button
            onClick={SettingsPageResponsive}
            className="lg:hidden fixed top-12 ml-20 text-white"
          >
            <SettingsIcon fontSize="large" />
          </button>
          <button
            onClick={ResponsiveLogoutButton}
            className="lg:hidden fixed top-5 left-7 mt-6 ml-8 text-white"
          >
            <LogoutIcon fontSize="large" />
          </button>
        </div>
        <Logout />
        <Settings />
      </div>
    </div>
  );
};

export default FriendsList;
