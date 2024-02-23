import React, { useState } from 'react';
import CreateAccountModal from '../modals/CreateAccountModal';
import useOpenCloseModal from '../hooks/useOpenCloseModal';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Input } from '../components/Input';
import { useDispatch } from 'react-redux';
// import { response } from 'express';

export default function LoginPage() {
  const [showModal, setShowModal, closeModal] = useOpenCloseModal(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await axios.post('/api/auth', {
      username,
      password,
    });

    console.log(res);
    if (res.data.success) {
      dispatch({
        type: 'USER_LOG_IN',
        payload: { username: res.data.username, email: res.data.email },
      });
      navigate('/welcome');
    } else {
      alert('Username or password is not correct. Try again please.');
    }
  };
  return (
    <main className="bg-blue-400 h-screen justify-center flex flex-col items-center ">
      <div className="flex flex-col items-center text-6xl font-bold text-white p-5 ">
        RambleOn
      </div>
      <div className="flex flex-col items-center">
        <form className="flex flex-col items-center mt-6 p-10 gap-5">
          <Input
            value={username}
            label="Username:"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Type here"
          />
          {/* <label className="p-2">Username:</label>
          <input
            placeholder="Type here"
            className=" border-2 border-red-400 w-full rounded-md max-w-xs p-2"
            type="text"
            name="userName"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          /> */}
          {/* <label className="p-2">Password:</label>
          <input
            placeholder="Type here"
            className="border-2  border-red-400 w-full rounded-md max-w-xs p-2  text-white"
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          /> */}
          <Input
            value={password}
            label="Password:"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Type here"
          />
          <button
            onClick={(e) => handleLogin(e)}
            className="border-2 border-red-400 rounded-lg p-2 mt-4 bg-gray-100
            hover:bg-gray-400 text-xl"
            type="submit"
          >
            Sign In
          </button>
        </form>
        <button
          onClick={() => {
            setShowModal(true);
          }}
          className="border-2 border-red-400 rounded-lg p-2 m-2
          bg-gray-100
          hover:bg-gray-400 text-xl  "
        >
          Create An Account
        </button>
      </div>
      <CreateAccountModal onClose={closeModal} visible={showModal} />
    </main>
  );
}
