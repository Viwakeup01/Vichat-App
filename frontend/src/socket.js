import { io } from "socket.io-client";

// Replace with your backend URL/port
const socket = io("http://localhost:5000", {
  transports: ["websocket"],
  withCredentials: true,
});

export default socket;
