// src/App.jsx
import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import ChatWindow from "./components/ChatWindow";
import MessageInput from "./components/MessageInput";
import socket from "./socket"; // 🧠 Import socket

function App() {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");

  useEffect(() => {
    // Join a default room or setup user
    socket.emit("joinRoom", "room1");

    socket.on("receiveMessage", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off("receiveMessage");
    };
  }, []);

  const sendMessage = () => {
    if (messageInput.trim()) {
      socket.emit("sendMessage", { roomId: "room1", message: messageInput });
      setMessageInput("");
    }
  };

  return (
    <div className="app-container">
      <Sidebar />
      <div className="chat-section">
        <ChatWindow messages={messages} />
        <MessageInput
          message={messageInput}
          setMessage={setMessageInput}
          onSend={sendMessage}
        />
      </div>
    </div>
  );
}

export default App;
