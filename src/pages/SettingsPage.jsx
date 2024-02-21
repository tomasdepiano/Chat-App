import React, { useState } from 'react';

import ChangeUserName from '../modals/ChangeUserName';
import ChangeUserName from '../modals/ChangeUserName';
import ChangePassWord from '../modals/ChangePassword';
import ChangeEmail from '../modals/ChangeEmail';

function SettingsPage() {
  const [changeUserName, setChangeUserName] = useState(false);
  const [changePassWord, setChangePassWord] = useState(false);
  const [changeEmail, setChangeEmail] = useState(false);
  const handleOnClose = () => setChangeUserName(false);
  // const handleOnClose = () => setChangePassWord(false);
  return (
    <main className="h-screen w-screen bg-blue-400 ">
      <h1 className="text-xl font-bold text-center p-2">Settings</h1>
      <section className="flex flex-col items-center w-full mt-8 justify-evenly">
        <article className="flex">
          <lable className="p-2">UserName:</lable>
          <input
            type="text"
            className="border-2 border-red-500 w-22 max-w-xs rounded-md "
          />
          <button
            onClick={() => {
              // e.preventDefault();
              setChangeUserName(true);
            }}
            className="w-22 border-2 border-gray-400 rounded-lg bg-gray-100 ml-2 p-1.5 hover:bg-gray-400"
          >
            Change UserName
          </button>
        </article>

        <article className="flex mt-4 justify-evenly">
          <label className="p-2">PassWord:</label>
          <input
            type="password"
            className=" w-22 border-2 border-red-500 max-w-xs rounded-md p-1"
          />
          <button
            onClick={() => {
              setChangePassWord(true);
            }}
            className="w-22 border-2 border-gray-400 rounded-lg bg-gray-100 ml-2 p-1.5 hover:bg-gray-400"
          >
            Change Password
          </button>
        </article>
        <article className="flex mt-4 justify-evenly">
          <label className="p-2 ">Email:</label>
          <input
            type="email"
            className="border-2 border-red-500 w-22 max-w-xs rounded-md"
          />
          <button
            onClick={() => {
              setChangeEmail(true);
            }}
            className="w-22 border-2 border-gray-400 rounded-lg bg-gray-100 ml-2 pl-6 pr-6 hover:bg-gray-400"
          >
            Change Email
          </button>
        </article>
      </section>
      <ChangeUserName onClose={handleOnClose} visible={changeUserName} />
      <ChangePassWord onClose={handleOnClose} visible={changePassWord} />
      <ChangeEmail onClose={handleOnClose} visible={changeEmail} />
    </main>
  );
}

export default SettingsPage;
