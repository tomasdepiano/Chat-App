import React, { useState } from "react";
import axios from "axios";

export default function CreateAccountModal({ visible, onClose }) {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  if (!visible) return null;

  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="bg-white py-16 px-16 rounded flex flex-col">
        <h1 className="flex justify-center">Create a New Account!</h1>
        <form className="flex flex-col items-center mt-4">
          <div>
            <label className="p-2">First Name:</label>
            <input
              className="ml-2 p-2 border-2 border-red-400 rounded"
              placeholder="Type here"
              type="text"
            />
          </div>
          <div className="mt-2">
            <label className="p-2">Last Name:</label>
            <input
              className="ml-2 p-2 border-2 border-red-400 rounded"
              placeholder="Type here"
              type="text"
            />
          </div>
          <div className="mt-2">
            <label className="p-2">Username:</label>
            <input
              className="ml-2 p-2 border-2 border-red-400 rounded"
              placeholder="Type here"
              type="text"
            />
          </div>
          <div className="mt-2">
            <label className="p-2">Email:</label>
            <input
              className="ml-2 p-2 border-2 border-red-400 rounded"
              placeholder="Type here"
              type="text"
            />
          </div>
          <div className="mt-2">
            <label className="p-2">Password:</label>
            <input
              className="ml-2 p-2 border-2 border-red-400 rounded"
              placeholder="Type here"
              type="password"
            />
          </div>
          <div className="mt-4">
            <button className="mr-10" type="submit">
              Submit
            </button>
            <button onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}
