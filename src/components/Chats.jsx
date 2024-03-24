import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NewMessageModal from '../modals/NewMessageModal.jsx';
import useOpenCloseModal from '../hooks/useOpenCloseModal';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import axios from 'axios';
import { fetchChats, setSelectedChatId } from '../redux/chatActions.js';
import { fetchMessages } from '../redux/messageActions.js';
import { setFriendUsername } from '../redux/friendsActions.js';
const Chats = () => {
  const user = useSelector((state) => state.user);
  const userId = useSelector((state) => state.userId);
  // console.log('userId from reducer', userId);
  const chats = useSelector((state) => state.chats);
  {
    console.log(chats);
  }
  // console.log('chats from reducer', chats);
  // const id = useSelector((state) => state.id);
  // console.log('user from reduxstate', user, id);
  // const [showModal, setShowModal, closeModal] = useOpenCloseModal(false);
  // const [conversations, setConversations] = useState([]);

  // useEffect(() => {
  //   axios.get('/api/allUsers').then((res) => {
  //     console.log('all existing users ', res);
  //   });
  // }, []);
  // the useeffect hook for getiing conversations or chats
  // useEffect(() => {
  //   if (userId) {
  //     const fetchConversations = async () => {
  //       try {
  //         const res = await axios.get(`http://localhost:3501/api/chats/${id}`);

  //         setConversations(res.data);
  //       } catch (error) {
  //         console.error('Error fetching conversations:', error);
  //       }
  //     };

  //     fetchConversations();
  //   } else {
  //     console.error('User ID is undefined');
  //   }
  // }, [id]); // here 'user' is a dependency to refetch when the user changes

  // function to get messages from getmessages API

  // const fetchMessages = async (chatId, user) => {
  //   try {
  //     const res = await axios.get(
  //       `http://localhost:3501/api/messages/${chatId}`,
  //       {
  //         params: {
  //           chatId,
  //           senderId: user?.id,
  //         },
  //       }
  //     );
  //     setMessages({ ...messages, messages: res.data, receiver: user, chatId });
  //   } catch (error) {
  //     console.error('Error fetching messages:', error);
  //   }
  // };
  const dispatch = useDispatch();
  useEffect(() => {
    if (userId) {
      axios.get(`/api/chats/${userId}`).then((res) => {
        console.log('chats response:', res);
        dispatch(
          fetchChats(res.data) //here we will fetch when the component mounts or when the userId changes
        );
      });
      // console.log('chat actions:', response);

      // console.log('hit useEffect');
    }
  }, [userId, dispatch]);

  const handleChatClick = (chatId, user) => {
    dispatch(setSelectedChatId(chatId));
    dispatch(setFriendUsername(user));
  };

  return (
    <main className="lg:mt-10 lg:ml-2 lg:text-white lg:text-lg lg:w-1/3 xxs:mt-10 xxs:ml-28 xxs:text-white ">
      <div>
        Hello,
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
        {/* <NewMessageModal onClose={closeModal} visible={showModal} /> */}
      </div>
      {/* division for Chats Title */}
      <h2 className=" flex justify-center  mt-8 mb-6">Chats</h2>
      {/* Division for showing conversations */}
      <div className="text-black p-5 h-[80%] mt-8 overflow-y-auto flex flex-col  space-y-5">
        {chats.length > 0 ? (
          chats.map((chat) => (
            <button
              key={chat.chatId}
              className=" justify-center hover:font-bold"
              onClick={() => handleChatClick(chat.chatId, chat.user)}
            >
              Conversation with {chat.user.username}
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
