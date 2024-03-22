import React, { useEffect } from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import Logout from '../components/Logout.jsx';
import Settings from '../components/Settings.jsx';
import { useNavigate } from 'react-router-dom';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import axios from 'axios';
import GroupMessageModal from '../modals/GroupMessageModal.jsx';
import useOpenCloseModal from '../hooks/useOpenCloseModal.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFriends } from '../redux/friendsActions.js';

const FriendsList = () => {
  const [showModal, setShowModal, closeModal] = useOpenCloseModal(false);
  // const [friendsList, setFriendsList] = useState([]);
  const navigate = useNavigate();

  function SettingsPageResponsive() {
    navigate('/settings2');
  }

  function ResponsiveLogoutButton() {
    navigate('/');
  }

  const dispatch = useDispatch();
  const friendsList = useSelector((state) => state.friendsList); // Update this path based on your Redux state structure
  // console.log('friendsList from redux=>', friendsList);

  useEffect(() => {
    fetchFriends();
  }, [dispatch]);

  return (
    <div className="w-1/4 flex-none  ">
      <div className="lg:mt-10 lg:ml-10 text-white lg:text-xl lg:w-[80%] lg:flex lg:justify-between  xxs:hidden ">
        <div className="border-2 border-red-400 rounded-lg hover:bg-gray-400 text-black bg-gray-100">
          <button>Add Friend</button>
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
      <div className="text-xl flex justify-center text-white p-2">
        Friends List
      </div>
      <div className="text-white p-10 text-xl">
        {friendsList.map((friend) => {
          // console.log('friendsList:', friend);
          return (
            <div
              key={friend.userId}
              className=" m-2 cursor-pointer hover:font-bold "
            >
              {friend.username}
            </div>
          );
        })}
      </div>
      <div className="fixed bottom-[0.5%]">
        {/* responsivepage icons for settings&logout */}
        <div>
          <button className="lg:hidden fixed top-10 border-2 border-red-400 rounded-lg text-black bg-gray-100 ">
            Add Friend
          </button>
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
