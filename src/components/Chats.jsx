import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NewMessageModal from "../modals/NewMessageModal.jsx";
import useOpenCloseModal from "../hooks/useOpenCloseModal";
import MapsUgcOutlinedIcon from "@mui/icons-material/MapsUgcOutlined";
import axios from "axios";

const Chats = () => {
  const user = useSelector((state) => state.user);
  const [showModal, setShowModal, closeModal] = useOpenCloseModal(false);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    axios.get("/api/allUsers").then((res) => {
      console.log(res);
      setUserList(res.data);
    });
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
        {userList.map((person) => {
          return (
            <div className="p-10 border-b-2 border-slate-600">
              {person.fname} {person.lname} {`(${person.username})`}
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Chats;
