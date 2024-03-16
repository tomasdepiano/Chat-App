import React from 'react';
import { useSelector } from 'react-redux';
import NewMessageModal from '../modals/NewMessageModal.jsx';
import useOpenCloseModal from '../hooks/useOpenCloseModal';

import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
const Chats = () => {
  const user = useSelector((state) => state.user);
  const [showModal, setShowModal, closeModal] = useOpenCloseModal(false);
  return (
    <div className=" lg:mt-10 lg:ml-2 lg:text-white lg:text-lg lg:w-1/3 xxs:mt-10 xxs:ml-28 xxs:text-white">
      Hello, <span className="font-bold text-2xl text-red-700">{user} !</span>
      <button
        className="ml-2"
        title="New Message"
        onClick={() => {
          setShowModal(true);
        }}
      >
        <MapsUgcOutlinedIcon fontSize="large" />
      </button>
      <NewMessageModal onClose={closeModal} visible={showModal} />
      <div className=" text-primary text-lg">Messages</div>
      <div className="  h-screen  w-full overflow-y-auto"></div>
    </div>
  );
};

export default Chats;
