// src/components/MessageInput.jsx
import React from "react";

function MessageInput({ message, setMessage, onSend }) {
  return (
    <div className="message-input">
      <input
        type="text"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={onSend}>Send</button>
    </div>
  );
}

export default MessageInput;
