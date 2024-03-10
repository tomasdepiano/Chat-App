import React from "react";
import { useSelector } from "react-redux";

function SettingsButton() {
  const user = useSelector((state) => state.user);
  return (
    <>
      <main className="bg-blue-400 h-screen">
        <div
          className=" lg:mt-10 lg:ml-2 lg:text-white lg:text-lg lg:w-1/3
          xxs:mt-10 xxs:ml-28 xxs:text-white"
        >
          {" "}
          Hello,{" "}
          <span className="font-bold text-2xl text-red-700">{user} !</span>
        </div>
      </main>
    </>
  );
}

export default SettingsButton;
