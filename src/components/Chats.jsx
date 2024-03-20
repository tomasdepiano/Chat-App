import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import NewMessageModal from '../modals/NewMessageModal.jsx';
import useOpenCloseModal from '../hooks/useOpenCloseModal';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import axios from 'axios';

const Chats = () => {
  // const user = useSelector((state) => state.user);
  const [showModal, setShowModal, closeModal] = useOpenCloseModal(false);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('user:detail'))
  );
  const [conversations, setConversations] = useState([]);
  console.log('user:>>', user);
  console.log('conversations:>>', conversations);
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('user:details'));
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
    axios.get('/api/allUsers').then((res) => {
      console.log(res);
      setUserList(res.data);
    });

    fetchConversations();
  }, []);

  return (

    <main className=" lg:mt-10 lg:ml-2 lg:text-white lg:text-lg lg:w-1/3 xxs:mt-10 xxs:ml-28 xxs:text-white">
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
      <div className="text-xl flex justify-center p-2">Chats</div>

      <div className="text-white p-10">
        {userList.map((person, index) => {
          return (
            <div key={index} className="p-10 border-b-2 border-slate-600">

      <div className="text-white p-5 font-bold">
        {userList.map((person) => {
          return (
            <div className="p-10 border-b-2 border-t-2 border-slate-600 ">

              <button>
                {person.fname} {person.lname} {`(${person.username})`}
              </button>

    <main className="lg:mt-10 lg:ml-2 lg:text-white lg:text-lg lg:w-1/3 xxs:mt-10 xxs:ml-28 xxs:text-white ">
      <div>
        Hello,{" "}
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
        <NewMessageModal onClose={closeModal} visible={showModal} />
        {/* <div className="text-xl flex justify-center p-2">Chats</div> */}
        {/* <div className="text-white p-5 font-bold ">
          {userList.map((person) => {
            return (
              <div className="p-10  ">
                <button className="border-2 border-red-400 rounded-full px-2 py-2 ">
                  {`${person.username}`}
                </button>
              </div>
            );
          })}
        </div> */}
      </div>
      {/* division for Chats Title */}
      <h3 className=" flex justify-center  mt-8 mb-6">Chats</h3>
      {/* Division for showing conversations */}
      <div className="text-black p-5 h-[80%] mt-8 overflow-y-auto flex flex-col  space-y-5">
        {userList.map((person) => {
          return (
            <div className="p-10 border-2 border-red-400 rounded-full px-12 py-2 bg-gray-100 hover:bg-gray-400  ">
              {/* <button className="border-2 border-red-400 rounded-full px-12 py-8 bg-gray-100 hover:bg-gray-400 "></button> */}
              <h3 className=" text-xl font-bold">{`${person.username}`}</h3>
              <p>messages</p>

            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Chats;
