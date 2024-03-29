import React from 'react';
import { useSelector } from 'react-redux';
const tailwindColors = [
  'bg-red-500',
  'bg-pink-500',
  'bg-purple-500',
  'bg-deep-purple-500',
  'bg-teal-500',
  'bg-green-500',
  'bg-light-green-500',
  'bg-lime-500',
  'bg-yellow-500',
  'bg-amber-500',
  'bg-orange-500',
  'bg-brown-500',
];
const getRandomColorClass = (letter) => {
  const randomIndex = Math.floor(letter.charCodeAt(0)) % tailwindColors.length;
  return tailwindColors[randomIndex];
};

const UserIcon = ({ userId }) => {
  const friends = useSelector((state) => state.friend.friendsList);
  const username = friends.find((user) => user.userId === userId);

  const firstLetter = username ? username.username[0].toUpperCase() : '?';
  let iconColorClass;
  if (firstLetter) {
    iconColorClass = getRandomColorClass(firstLetter);
  } else {
    iconColorClass = tailwindColors[0];
  }
  return (
    <div
      className={`user-icon ${iconColorClass} flex items-center justify-center rounded-full h-10 w-10 text-white`}
    >
      {firstLetter}
    </div>
  );
};

export default UserIcon;
