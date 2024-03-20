import React from "react";

function ChangeEmail({ visible, onClose }) {
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
      <div className="bg-white p-2 rounded py-16 px-16 flex flex-col">
        <form>
          <div>
            <label className="mr-1">Current Email:</label>
            <input type="email" className="border-2 border-black rounded-md " />
          </div>
          <div className="mt-4">
            <label className="mr-2 pl-4">New Email:</label>
            <input type="email" className="border-2 border-black rounded-md" />
          </div>

          <div className="mt-6">
            <button className="border-2 border-gray-500 bg-gray-100 rounded-md mr-4 p-1">
              Update Email
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

export default ChangeEmail;
