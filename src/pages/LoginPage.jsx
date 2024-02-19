import React, { useState } from "react";
import CreateAccountModal from "../modals/CreateAccountModal";
//TALK TO MOUNIKA ABOUT ADDING A NOTIFICATION FEATURE ON APP

export default function LoginPage() {
  const [showModal, setShowModal] = useState(false);

  const handleOnClose = () => setShowModal(false);

  return (
    <main className="bg-blue-400 h-screen justify-center">
      <div className="flex flex-col items-center text-3xl font-bold ">
        Chat App
      </div>
      <div className="flex flex-col items-center">
        <form className="flex flex-col items-center w-full mt-6 p-10">
          <label className="p-2">Username:</label>
          <input
            placeholder="Type here"
            className=" border-2 border-red-400 w-full rounded-md max-w-xs p-2"
            type="text"
            name="email"
          />
          <label className="p-2">Password:</label>
          <input
            placeholder="Type here"
            className="border-2  border-red-400 w-full rounded-md max-w-xs p-2"
            type="password"
            name="password"
          />
          <button
            className="border-2 border-red-400 rounded-lg p-2 mt-4 bg-gray-100
            hover:bg-gray-400"
            type="submit"
          >
            Sign In
          </button>
        </form>
        <button
          onClick={() => setShowModal(true)}
          className="border-2 border-red-400 rounded-lg p-2 m-2
          bg-gray-100
          hover:bg-gray-400  "
        >
          Create An Account
        </button>
      </div>
      <CreateAccountModal onClose={handleOnClose} visible={showModal} />
    </main>
  );
}
