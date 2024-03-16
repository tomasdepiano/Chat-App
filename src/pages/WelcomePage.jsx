import { useEffect } from "react";
import { useSelector } from "react-redux";
import io from "socket.io-client";
import Chats from "../components/Chats.jsx";
import Messages from "../components/Messages.jsx";
import FriendsList from "../components/FriendsList.jsx";

const socket = io("http://localhost:3500", {
  transports: ["websocket"],
});

export default function WelcomePage() {
  const user = useSelector((state) => state.user);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected");
    });
    socket.on("receive_message", (data) => {
      setMessageReceived(data.message);
    });
  }, []);
  console.log(user);

  // const sendMessage = () => {
  //   socket.emit("send_message", {
  //     message,
  //   });
  // };

  useEffect(() => {}, []);

  return (
    <main className="bg-blue-400 h-screen flex flex-row justify-center ">
      {/* division for user details & messages */}
      <Chats />

      {/* division for message input and otheruser  */}
      <Messages />
      {/* division for friendsList and buttons(settings&logout)  */}
      <FriendsList />
    </main>
  );
}
