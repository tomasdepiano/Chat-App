import React, { useEffect, useState } from 'react';
import CreateIcon from '@mui/icons-material/Create';
// import { addFriend } from '../redux/actions/friendsActions';
import { useDispatch } from 'react-redux';
import axios from 'axios';

export default function AddFriendModal({ visible, onClose }) {
  const [userList, setUserList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('/api/allUsers').then((res) => {
      setUserList(res.data);
    });
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const filteredUsers = userList.filter((user) =>
    user.fname.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleAddFriend = (friendId) => {
    // dispatch(addFriend({ userId, friendId }));
    onClose(); // Close the modal after adding the friend
  };

  if (!visible) return null;

  return (
    <>
      <main className="flex fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-[1]  ">
        <section className="bg-blue-400 py-16 px-16 rounded  lg:w-[40%] mx-16 my-16 xxs:w-[90%] flex flex-col">
          <div className="flex w-96 rounded xxs:top-1">
            <input
              className="border-2 border-red-400 rounded-lg lg:w-[80%] text-black xxs:w-full xxs:p-2"
              type="search"
              name="search"
              id="search"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          {/* <div className="lg:fixed lg:right-2/3 lg:p-2 lg: ml-5  ">
            <CreateIcon />
          </div> */}
          <button
            className="  lg:rounded-lg lg:text-white lg:p-2 lg:fixed lg:top-20 lg:right-2/3 lg:w-[10%] lg:left-96 xxs:top-14 xxs:left-[95%] xxs:p-3 xxs:text-3xl "
            onClick={onClose}
          >
            X
          </button>
          <div>
            {filteredUsers.map((person) => {
              return (
                <div
                  key={person.userId}
                  className="p-10 border-b-2 border-slate-600"
                >
                  <span>{person.fname}</span>
                  <button
                    onClick={() => handleAddFriend(person.userId)}
                    className=" float-right border-2 border-red-400 rounded-lg hover:bg-gray-400 text-black bg-gray-100 "
                  >
                    Add Friend
                  </button>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}
