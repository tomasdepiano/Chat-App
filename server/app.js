import express from "express";
import session from "express-session";
import morgan from "morgan";
import ViteExpress from "vite-express";
import router from "./routes/index.js";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();

const ioServer = createServer(app); // Creating an HTTP server using the Express app
const io = new Server(ioServer); //initializing socketIO with the created server 


const port = process.env.PORT || "5044"; //defining port number here


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

//using the port variable 5044 by default or environment defined port 
ioServer.listen(port, () => {
  console.log(`listening on *:${port}`);
});

ViteExpress.listen(app, port, () => {
  console.log(`Vite-Express server is listening on ${port}`)
}
);
