import React, { useState } from "react";
import axios from "axios";

export default function CreateAccountModal({ visible, onClose }) {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const CreateAccountButton = async (e) => {
    e.preventDefault();
    const res = await axios.post("/api/createAccount", {
      fname,
      lname,
      email,
      username,
      password,
    });

    onClose(false);

    return alert(res.data.message);
  };

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
      <div className="bg-blue-400 py-16 px-16 rounded flex flex-col">
        <h1 className="flex justify-center">Create a New Account!</h1>
        <form
          onSubmit={(e) => {
            //Another way to pass the preventDefault
            CreateAccountButton(e);
          }}
          className="flex flex-col items-center mt-4"
        >
          <div>
            <label className="p-2">First Name:</label>
            <input
              className="ml-2 p-2 border-2 border-red-400 rounded"
              placeholder="Type here"
              type="text"
              onChange={(e) => setFname(e.target.value)}
              value={fname}
            />
          </div>
          <div className="mt-2">
            <label className="p-2">Last Name:</label>
            <input
              className="ml-2 p-2 border-2 border-red-400 rounded"
              placeholder="Type here"
              type="text"
              onChange={(e) => setLname(e.target.value)}
              value={lname}
            />
          </div>
          <div className="mt-2">
            <label className="p-2">Username:</label>
            <input
              className="ml-2 p-2 border-2 border-red-400 rounded"
              placeholder="Type here"
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>
          <div className="mt-2">
            <label className="p-2">Email:</label>
            <input
              className="ml-2 p-2 border-2 border-red-400 rounded"
              placeholder="Type here"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="mt-2">
            <label className="p-2">Password:</label>
            <input
              className="ml-2 p-2 border-2 border-red-400 rounded"
              placeholder="Type here"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
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
