import React from 'react';

const Settings = () => {
  const SettingsPage = () => {
    navigate('/Settings');
  };
  return (
    <div>
      <button
        className="hidden lg:block lg:border-2 lg:border-red-400 lg:rounded-lg lg:p-2  lg:bg-gray-100 lg:hover:bg-gray-400 lg:text-xl "
        onClick={SettingsPage}
      >
        Settings
      </button>
    </div>
  );
};

export default Settings;
