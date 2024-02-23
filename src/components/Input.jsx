import React from "react";

export const Input = ({ label, value, onChange, ...props }) => {
  return (
    <div className="flex items-center w-96">
      <label className="p-2 text-white text-xl w-2/5">{label}</label>
      <input
        {...props}
        className="border-2 border-red-400 w-full rounded-md max-w-xs p-2 "
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export const ModalInputs = ({ label, value, onChange, ...props }) => {
  return (
    <div className="flex items-center w-96">
      <label className="p-2 text-white text-xl w-1/3">{label}</label>
      <input
        {...props}
        className="ml-2 p-2 border-2 border-red-400 rounded"
        onChange={onChange}
        value={value}
      />
    </div>
  );
};
