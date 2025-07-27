// socket.js
module.exports = function (io) {
  io.on("connection", (socket) => {
    console.log("🟢 New client connected:", socket.id);

    // Handle incoming messages
    socket.on("send-message", (data) => {
      console.log("📨 Message received:", data);
      socket.broadcast.emit("receive-message", data); // send to others
    });

    // Typing indicator
    socket.on("typing", (user) => {
      socket.broadcast.emit("user-typing", user);
    });

    socket.on("disconnect", () => {
      console.log("🔴 Client disconnected:", socket.id);
    });
  });
};
