import React, { useState } from "react";
import axios from "axios";

function ChangePassWord({ visible, onClose }) {
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  const [newPassword, setNewPassword] = useState("");

  function updatePassword() {
    axios.put("/api/editPassword", {
      password: newPassword,
    });
  }

  if (!visible) return null;
  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="bg-white p-2 rounded py-16 px-16 flex flex-col">
        <form>
          <div>
            <label className="mr-1">Current Password:</label>
            <input
              type="password"
              className="border-2 border-black rounded-md "
            />
          </div>
          <div className="mt-4">
            <label className="mr-2 pl-4">New Password:</label>
            <input
              onChange={(e) => {
                setNewPassword(e.target.value);
              }}
              value={newPassword}
              type="password"
              className="border-2 border-black rounded-md"
            />
          </div>

          <div className="mt-6">
            <button
              onClick={(e) => {
                e.preventDefault();
                updatePassword();
                window.alert("password has been updated");
                onClose();
              }}
              className="border-2 border-gray-500 bg-gray-100 rounded-md mr-4 p-1"
            >
              Update Password
            </button>
            <button
              onClick={onClose}
              className="border-2 border-gray-500 bg-gray-100 rounded-md mr-4 p-1 pr-8 pl-8"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ChangePassWord;
