import React, { useEffect, useState } from 'react';
import NewMessageModal from '../modals/NewMessageModal.jsx';
import useOpenCloseModal from '../hooks/useOpenCloseModal';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import axios from 'axios';

const Chats = () => {
  const [showModal, setShowModal, closeModal] = useOpenCloseModal(false);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('user:detail'))
  );
  const [conversations, setConversations] = useState([]);
  const [userList, setUserList] = useState([]); // Uncommented and initialized

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('user:detail')); // Make sure this matches the key used to set the user in localStorage

    const fetchConversations = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3501/api/conversations/${loggedInUser.id}`
        );
        setConversations(response.data);
      } catch (error) {
        console.error('Error fetching conversations:', error);
      }
    };

    // Uncomment and correct this to match your actual API endpoint for fetching users
    // const fetchUsers = async () => {
    //   try {
    //     const response = await axios.get('/api/allUsers');
    //     setUserList(response.data);
    //   } catch (error) {
    //     console.error('Error fetching users:', error);
    //   }
    // };

    fetchConversations();
    // fetchUsers(); // Call this if needed
  }, []);

  return (
    <main className="lg:mt-10 lg:ml-2 lg:text-white lg:text-lg lg:w-1/3 xxs:mt-10 xxs:ml-28 xxs:text-white">
      Hello,{' '}
      <span className="font-bold text-2xl text-red-700">{user?.fullName}!</span>
      <button
        className="ml-2"
        title="New Message"
        onClick={() => setShowModal(true)}
      >
        <MapsUgcOutlinedIcon fontSize="large" />
      </button>
      <NewMessageModal onClose={closeModal} visible={showModal} />
      <div className="text-xl flex justify-center p-2">Chats</div>
      <div className="text-white p-10">
        {userList.map((person, index) => (
          <div key={index} className="p-10 border-b-2 border-slate-600">
            <button>
              {person.fname} {person.lname} {`(${person.username})`}
            </button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Chats;
