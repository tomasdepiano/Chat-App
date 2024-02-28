import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Input from "../components/Input.jsx";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import MapsUgcOutlinedIcon from "@mui/icons-material/MapsUgcOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";

export default function WelcomePage() {
  const user = useSelector((state) => state.user);

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };
  const SettingsPage = () => {
    navigate("/Settings");
  };

  return (
    <main className="bg-blue-400 h-screen flex flex-row justify-center ">
      <div className=" mt-10 ml-2 text-white text-lg w-1/3">
        Hello, <span className="font-bold text-2xl text-red-700">{user} !</span>
        <button className="ml-2" title="New Message">
          <MapsUgcOutlinedIcon fontSize="large" />
        </button>
      </div>
      <div className="bg-white w-2/3 h-screen flex flex-col justify-center items-center ">
        <div className="fixed bottom-10 w-[50%] flex items-center">
          <Input className=" w-[95%] ml-1.5" placeholder="Type Here" />
          <div className="w-[10%]">
            <button className="w-full">
              <ArrowCircleRightOutlinedIcon fontSize="large" />
            </button>
          </div>
        </div>
      </div>
      <div className="w-1/4 flex-none">
        <div className="mt-10 ml-10 text-white text-xl w-[80%] flex justify-between ">
          <p>Friends List</p>
          <button title="Group Chat">
            <GroupAddOutlinedIcon fontSize="large" />
          </button>
        </div>

        <div className="fixed bottom-10">
          <button
            className="mr-10 border-2 border-red-400 rounded-lg p-2 m-2 bg-gray-100 hover:bg-gray-400 text-2xl"
            onClick={handleLogout}
          >
            Logout
          </button>
          <button
            className="border-2 border-red-400 rounded-lg p-2  bg-gray-100 hover:bg-gray-400 text-xl"
            onClick={SettingsPage}
          >
            Go To Settings Page
          </button>
        </div>
      </div>
    </main>
  );
}
