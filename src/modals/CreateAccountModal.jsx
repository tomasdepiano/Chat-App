import React, { useState } from "react";
import axios from "axios";
import { ModalInputs } from "../components/Input";

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
      <div className="bg-blue-400 py-16 px-16 rounded flex flex-col xxs:py-6 xxs:px-0.5">
        <h1 className="flex justify-center text-white text-xl">
          Create a New Account!
        </h1>
        <form
          onSubmit={(e) => {
            //Another way to pass the preventDefault
            CreateAccountButton(e);
          }}
          className="flex flex-col items-center mt-4"
        >
          <div>
            <ModalInputs
              value={fname}
              label="First Name:"
              onChange={(e) => setFname(e.target.value)}
              placeholder="Type here"
            />
          </div>
          <div className="mt-2">
            <ModalInputs
              value={lname}
              label="Last Name:"
              onChange={(e) => setLname(e.target.value)}
              placeholder="Type here"
            />
          </div>
          <div className="mt-2">
            <ModalInputs
              value={username}
              label="Username:"
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Type here"
            />
          </div>
          <div className="mt-2">
            <ModalInputs
              value={email}
              label="Email:"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Type here"
            />
          </div>
          <div className="mt-2">
            <ModalInputs
              value={password}
              label="Password:"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Type here"
              type="password"
            />
          </div>
          <div className="mt-4">
            <button
              className="mr-10 border-2 border-red-400 rounded-lg p-2 m-2 bg-gray-100 hover:bg-gray-400 text-xl"
              type="submit"
            >
              Submit
            </button>
            <button
              className="mr-10 border-2 border-red-400 rounded-lg p-2 m-2 bg-gray-100 hover:bg-gray-400 text-xl"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
