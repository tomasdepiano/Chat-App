import express from "express";
import session from "express-session";
import morgan from "morgan";
import ViteExpress from "vite-express";
import router from "./routes/index.js";
import { createServer } from "http";
import { Server as SocketIOServer } from "socket.io";
import cors from "cors";

const app = express();

const ioServer = createServer(app);
const io = new SocketIOServer(ioServer);

const port = "5044";
ViteExpress.config({ printViterDevServerHost: true });
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  session({
    secret: "ssshhhhh",
    saveUninitialized: true,
    resave: false
  })
);
app.use(cors());

//Defining socket.io connection event
io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("send_message", (data) => {
    socket.broadcast.emit("receive_message", data);
  });
});


app.use(router);//use routes


ioServer.listen(port, () => {
  console.log(`listening on *:${port}`);
});

ViteExpress.listen(app, 3500, () =>
  console.log("Server is listening on " + 3500)
);
