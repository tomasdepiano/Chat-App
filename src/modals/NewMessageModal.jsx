import React, { useEffect, useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import axios from "axios";

export default function NewMessageModal({ visible, onClose }) {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    axios.get("/api/allUsers").then((res) => {
      setUserList(res.data);
    });
  }, []);

  if (!visible) return null;

  return (
    <>
      <main className="flex fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-[1] ">
        <section className="bg-blue-400 py-16 px-16 rounded  w-[30%] mx-16 my-16">
          <div className="flex w-96 rounded ">
            <input
              className="border-2 border-red-400 rounded-lg w-[80%] text-black"
              type="search"
              name="search"
              id="search"
              placeholder="Search..."
            />
          </div>
          <div className="fixed right-2/3 ">
            <CreateIcon />
          </div>
          <button
            className="  rounded-lg text-white p-2 fixed top-20 right-2/3  "
            onClick={onClose}
          >
            X
          </button>
          <div>
            {userList.map((person) => {
              return (
                <div className="p-10 border-b-2 border-slate-600">
                  <button onClick={onClose}>{person.fname}</button>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}
