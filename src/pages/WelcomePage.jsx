import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Input from "../components/Input.jsx";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import MapsUgcOutlinedIcon from "@mui/icons-material/MapsUgcOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
// import Avatar from '../components/Avatar.jsx';
import CallImage from "../components/CallImage.jsx";
import io from "socket.io-client";
import SettingsIcon from "@mui/icons-material/Settings";
import SettingsButton from "./Responsive/SettingsButton.jsx";

const socket = io("http://localhost:3000", {
  transports: ["websocket"],
});

export default function WelcomePage() {
  const user = useSelector((state) => state.user);
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");

  const navigate = useNavigate();

  function SettingsPageResponsive() {
    navigate("/settings2");
  }

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected");
    });
    socket.on("receive_message", (data) => {
      setMessageReceived(data.message);
    });
  }, []);
  console.log(user);

  // const sendMessage = () => {
  //   socket.emit("send_message", {
  //     message,
  //   });
  // };

  const handleLogout = () => {
    navigate("/");
  };
  const SettingsPage = () => {
    navigate("/Settings");
  };

  return (
    <main className="bg-blue-400 h-screen flex flex-row justify-center ">
      {/* division for user details & messages */}
      <div className=" lg:mt-10 lg:ml-2 lg:text-white lg:text-lg lg:w-1/3 xxs:mt-10 xxs:ml-28 xxs:text-white">
        Hello, <span className="font-bold text-2xl text-red-700">{user} !</span>
        <button className="ml-2" title="New Message">
          <MapsUgcOutlinedIcon fontSize="large" />
        </button>
      </div>
      {/* division for message input and otheruser  */}
      <div className="bg-white lg:w-2/3 lg:h-screen lg:flex lg:flex-col lg:justify-center lg:items-center md: hidden">
        {/* other user display */}
        <div className=" fixed top-4 w-[48%] h-[80px] bg-gray-100  rounded-full  flex justify-evenly items-center">
          {/* <Avatar className="" /> */}
          <div className=" cursor-pointer">
            <img
              className=" w-[50px] rounded-full"
              src="https://imgur.com/va1mKO4.png"
            />
          </div>
          <div>
            <h3 className=" text-lg font-medium">User Name</h3>
          </div>
          {/* call button */}
          <div>
            <button>
              <CallImage />
            </button>
          </div>
        </div>
        {/* messages showUp */}
        <div className=" h-[80%] mt-8 w-full  border-b overflow-y-auto">
          <div className="p-14">
            <div className="  max-w-[40%] bg-orange-400 rounded-b-2xl rounded-tr-xl p-4 mb-6 text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
              totam voluptatem eos eius quidem est temporibus maxime maiores,
              laudantium eligendi ut obcaecati dolorem quo sit fuga excepturi
              itaque fugiat ipsam?
            </div>
            <div className=" max-w-[40%] bg-blue-400 rounded-b-2xl rounded-tl-xl p-4 text-white ml-auto ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis quisquam nesciunt laudantium voluptas, recusandae
              repellendus sequi, voluptatum suscipit dolor sapiente non quod
              iste veritatis voluptates! Architecto non sed debitis mollitia.
            </div>
            <div className="  max-w-[40%] bg-orange-400 rounded-b-2xl rounded-tr-xl p-4 mb-6 text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
              totam voluptatem eos eius quidem est temporibus maxime maiores,
              laudantium eligendi ut obcaecati dolorem quo sit fuga excepturi
              itaque fugiat ipsam?
            </div>
            <div className=" max-w-[40%] bg-blue-400 rounded-b-2xl rounded-tl-xl p-4 text-white ml-auto ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis quisquam nesciunt laudantium voluptas, recusandae
              repellendus sequi, voluptatum suscipit dolor sapiente non quod
              iste veritatis voluptates! Architecto non sed debitis mollitia.
            </div>
            <div className="  max-w-[40%] bg-orange-400 rounded-b-2xl rounded-tr-xl p-4 mb-6 text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
              totam voluptatem eos eius quidem est temporibus maxime maiores,
              laudantium eligendi ut obcaecati dolorem quo sit fuga excepturi
              itaque fugiat ipsam?
            </div>
            <div className=" max-w-[40%] bg-blue-400 rounded-b-2xl rounded-tl-xl p-4 text-white ml-auto ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis quisquam nesciunt laudantium voluptas, recusandae
              repellendus sequi, voluptatum suscipit dolor sapiente non quod
              iste veritatis voluptates! Architecto non sed debitis mollitia.
            </div>
          </div>
        </div>
        {/* input for message */}
        <div className="fixed bottom-2 w-[25%] flex items-center ">
          <Input
            className=" w-[95%]  ml-1.5 "
            placeholder="Type Here"
            onChange={(event) => {
              setMessage(event.target.value);
            }}
          />
          <div className="w-[10%]">
            <button className="w-full">
              <ArrowCircleRightOutlinedIcon fontSize="large" />
            </button>
            {messageReceived}
          </div>
        </div>
      </div>
      {/* division for friendsList and buttons(settings&logout)  */}
      <div className="w-1/4 flex-none  ">
        <div className="lg:mt-10 lg:ml-10 text-white lg:text-xl lg:w-[80%] lg:flex lg:justify-between  xxs:hidden ">
          <p>Friends List</p>
          <button title="Group Chat">
            <GroupAddOutlinedIcon fontSize="large" />
          </button>
        </div>

        <div className="fixed bottom-10">
          <div>
            <button
              onClick={SettingsPageResponsive}
              className="lg:hidden fixed top-12 ml-9 text-black"
            >
              <SettingsIcon fontSize="large" />
            </button>
          </div>
          <button
            className="lg:mr-10 lg:border-2 lg:border-red-400 lg:rounded-lg lg:p-2 lg:m-2 lg:bg-gray-100 lg:hover:bg-gray-400 lg:text-2xl xxs:hidden"
            onClick={handleLogout}
          >
            Logout
          </button>
          <button
            className="lg:border-2 lg:border-red-400 lg:rounded-lg lg:p-2  lg:bg-gray-100 lg:hover:bg-gray-400 lg:text-xl xxs:hidden"
            onClick={SettingsPage}
          >
            Go To Settings Page
          </button>
        </div>
      </div>
    </main>
  );
}
