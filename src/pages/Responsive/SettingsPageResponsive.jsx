import React from "react";
import { useSelector } from "react-redux";
import useOpenCloseModal from "../../hooks/useOpenCloseModal";
import ChangeUserName from "../../modals/ChangeUserName";
import ChangeEmail from "../../modals/ChangeEmail";
import ChangePassWord from "../../modals/ChangePassword";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

function SettingsButton() {
  const user = useSelector((state) => state.user);
  const email = useSelector((state) => state.email);
  const [changeUserName, setChangeUserName, closeUserName] =
    useOpenCloseModal(false);
  const [changePassWord, setChangePassWord, closePassword] =
    useOpenCloseModal(false);
  const [changeEmail, setChangeEmail, closeEmail] = useOpenCloseModal(false);

  const navigate = useNavigate();

  function BackToWelcomePage() {
    navigate("/welcome");
  }

  return (
    <>
      <main className="xxs:bg-blue-400 xxs:h-screen xxs:flex ">
        <div className="text-white fixed top-[5%] ml-[5%]">
          <button onClick={BackToWelcomePage}>
            {<KeyboardBackspaceIcon fontSize="large" />}
          </button>
        </div>
        <div className=" xxs:mt-10 xxs:ml-[40%] xxs:justify-center xxs:text-white">
          {" "}
          Hello,{" "}
          <span className="font-bold text-2xl text-red-700">{user} !</span>
        </div>
        <div className="fixed top-[35%] ml-[20%] text-white text-bold text-lg mt-5">
          <p>
            Username: {user}{" "}
            <button
              onClick={() => {
                setChangeUserName(true);
              }}
              className="border-2 border-gray-400 rounded-lg ml-2 p-1.5 bg-gray-100 text-black hover:bg-gray-400"
            >
              Change Username
            </button>
          </p>
        </div>
        <div className="fixed top-[40%] ml-[20%] text-white text-bold text-lg mt-12">
          <p>
            Email: {email}{" "}
            <button
              onClick={() => {
                setChangeEmail(true);
              }}
              className="border-2 border-gray-400 rounded-lg ml-2 p-1.5 bg-gray-100 text-black hover:bg-gray-400"
            >
              Change Email
            </button>
          </p>
        </div>
        <div className="fixed top-[45%] ml-[20%] text-white text-bold text-lg mt-20">
          <p>
            Password: ******{" "}
            <button
              onClick={() => {
                setChangePassWord(true);
              }}
              className="border-2 border-gray-400 rounded-lg ml-2 p-1.5 bg-gray-100 text-black hover:bg-gray-400"
            >
              Change Password
            </button>
          </p>
        </div>
        <ChangeUserName onClose={closeUserName} visible={changeUserName} />
        <ChangeEmail onClose={closeEmail} visible={changeEmail} />
        <ChangePassWord onClose={closePassword} visible={changePassWord} />
      </main>
    </>
  );
}

export default SettingsButton;
