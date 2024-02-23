import React from 'react';

export const Input = ({ label, value, onChange, ...props }) => {
  return (
    <div>
      <label className="p-2 text-white flex flex-row">{label}</label>
      <input
        {...props}
        className="border-2 border-red-400 w-full rounded-md max-w-xs p-2 "
        onChange={onChange}
        value={value}
      />
    </div>
  );
};
