import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useOpenCloseModal from '../hooks/useOpenCloseModal';
import ChangeUserName from '../modals/ChangeUserName';
import ChangePassWord from '../modals/ChangePassword';
import ChangeEmail from '../modals/ChangeEmail';

function SettingsPage() {
  const [changeUserName, setChangeUserName, closeUserName] =
    useOpenCloseModal(false);
  const [changePassWord, setChangePassWord, closePassword] =
    useOpenCloseModal(false);
  const [changeEmail, setChangeEmail, closeEmail] = useOpenCloseModal(false);
  const user = useSelector((state) => state.user.user);
  const email = useSelector((state) => state.user.email);
  console.log('user', user);

  // //to put user info inplace of login
  // useEffect(() => {
  //   console.log(user);
  // }, [user]);

  return (
    <main className="h-screen w-screen bg-blue-400 ">
      <h1 className="text-xl font-bold text-center p-2 text-white ">
        Settings
      </h1>
      <section className="flex flex-col items-center w-full mt-8 justify-evenly">
        <article className="flex text-white">
          <p className="p-2 ">
            Username: <span className="font-bold">{user}</span>
          </p>
          {/* <lable >UserName:</lable>
          <label className="p-2">UserName:</label>
          <input
            type="text"
            className="border-2 border-red-500 w-22 max-w-xs rounded-md "
          /> */}
          <button
            onClick={() => {
              // e.preventDefault();
              setChangeUserName(true);
            }}
            className="w-22 border-2 border-gray-400 rounded-lg bg-gray-100 ml-2 p-1.5 hover:bg-gray-400 text-black"
          >
            Change Username
          </button>
        </article>

        <article className="flex mt-4 justify-evenly text-white">
          <p className="p-2 ">
            Email: <span className="font-bold">{email}</span>
          </p>
          {/* <label className="p-2">PassWord:</label>
          <input
            type="password"
            className=" w-22 border-2 border-red-500 max-w-xs rounded-md p-1"
          /> */}
          <button
            onClick={() => {
              setChangeEmail(true);
            }}
            className="w-22 border-2 border-gray-400 rounded-lg bg-gray-100 ml-2 p-1.5 hover:bg-gray-400 text-black"
          >
            Change Email
          </button>
        </article>
        <article className="flex mt-4 justify-evenly text-white">
          <label className="p-2 ">Password:******</label>

          <button
            onClick={() => {
              setChangePassWord(true);
            }}
            className="w-22 border-2 border-gray-400 rounded-lg bg-gray-100 ml-2 pl-6 pr-6 hover:bg-gray-400 text-black"
          >
            Change Password
          </button>
        </article>
      </section>
      <ChangeUserName onClose={closeUserName} visible={changeUserName} />
      <ChangeEmail onClose={closeEmail} visible={changeEmail} />
      <ChangePassWord onClose={closePassword} visible={changePassWord} />
    </main>
  );
}

export default SettingsPage;
