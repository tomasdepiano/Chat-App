import express from "express";
import session from "express-session";
import morgan from "morgan";
import ViteExpress from "vite-express";
import router from "./routes/index.js";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();

const ioServer = createServer(app);
const io = new Server(ioServer);

const port = "5044";
ViteExpress.config({ printViterDevServerHost: true });
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  session({ secret: "ssshhhhh", saveUninitialized: true, resave: false })
);
app.use(cors());

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("send_message", (data) => {
    socket.broadcast.emit("receive_message", data);
  });
});

app.use(router);

ioServer.listen(3000, () => {
  console.log("listening on *:3000");
});

ViteExpress.listen(app, port, () =>
  console.log("Server is listening on " + port)
);
