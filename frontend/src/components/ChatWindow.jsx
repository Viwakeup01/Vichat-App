// src/components/ChatWindow.jsx
import React from "react";

function ChatWindow({ messages }) {
  return (
    <div className="chat-window">
      <h2>Chat</h2>
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className="message">{msg}</div>
        ))}
      </div>
    </div>
  );
}

export default ChatWindow;
