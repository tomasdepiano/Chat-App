import React from "react";
import { useSelector } from "react-redux";
import Input from "../../components/Input";

function SettingsButton() {
  const user = useSelector((state) => state.user);
  const email = useSelector((state) => state.email);

  return (
    <>
      <main className="xxs:bg-blue-400 xxs:h-screen xxs:flex ">
        <div className=" xxs:mt-10 xxs:ml-[40%] xxs:justify-center xxs:text-white">
          {" "}
          Hello,{" "}
          <span className="font-bold text-2xl text-red-700">{user} !</span>
        </div>
        <div className="fixed top-[35%] ml-[20%] text-white text-bold text-lg">
          <p>Username: {user}</p>
        </div>
        <div className="fixed top-[40%] ml-[20%] text-white text-bold text-lg">
          <p>Email: {email}</p>
        </div>
        <div className="fixed top-[45%] ml-[20%] text-white text-bold text-lg">
          <p>Password: {<Input />}</p>
        </div>
      </main>
    </>
  );
}

export default SettingsButton;
