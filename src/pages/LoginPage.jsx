import React, { useState } from 'react';
import CreateAccountModal from '../modals/CreateAccountModal';
import useOpenCloseModal from '../hooks/useOpenCloseModal';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Input from '../components/Input';
import { useDispatch } from 'react-redux';

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
      console.log('user login response:', res.data);
      localStorage.setItem('token', res.data.token); //store the token
      dispatch({
        type: 'USER_LOGIN',
        payload: {
          username: res.data.username,
          email: res.data.email,
          id: res.data.userId,
        },
      });
      navigate('/welcome');
    } else {
      alert('Username or password is not correct. Try again please.');
    }
  };
  return (
    <main className="bg-blue-400 h-screen justify-center flex flex-col items-center ">
      <h1 className="flex flex-col items-center lg:text-6xl font-bold text-white p-5 sm:text-4xl sm:font-bold md:text-4xl xs:text-2xl xxs:text-xl">
        RambleOn - World's Best Chat App
      </h1>
      <div className="flex flex-col items-center">
        <form className="flex flex-col items-center mt-6 p-10 gap-5">
          <Input
            value={username}
            label="Username:"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Type here"
          />

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
            hover:bg-gray-400 text-xl sm:hover:bg-gray-400"
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
