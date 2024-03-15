import React from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import Logout from '../components/Logout.jsx';
import Settings from '../components/Settings.jsx';
import { useNavigate } from 'react-router-dom';

import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';

const FriendsList = () => {
  const navigate = useNavigate();

  function SettingsPageResponsive() {
    navigate('/settings2');
  }

  function ResponsiveLogoutButton() {
    navigate('/');
  }

  return (
    // division for friendsList and buttons(settings&logout)
    <div className="w-1/4 flex-none  ">
      <div className="lg:mt-10 lg:ml-10 text-white lg:text-xl lg:w-[80%] lg:flex lg:justify-between  xxs:hidden ">
        <p>Friends List</p>{' '}
        <div className="border-2 border-red-400 rounded-lg hover:bg-gray-400 text-black bg-gray-100">
          <button>Add Friend</button>
        </div>
        <button title="Group Chat">
          <GroupAddOutlinedIcon fontSize="large" />
        </button>
      </div>

      <div className="fixed bottom-10">
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
