import React from "react";

export default function NewMessageModal({ visible, onClose }) {
  if (!visible) return null;

  return (
    <>
      <div className="flex fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-[1] ">
        <div className="bg-blue-400 py-16 px-16 rounded flex  w-[75%] mx-16 my-16">
          <h1>Hello from New Message Modal</h1>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </>
  );
}
