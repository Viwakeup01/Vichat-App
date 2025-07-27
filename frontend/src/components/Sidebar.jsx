import React from "react";

export default function Sidebar({ toggleDark }) {
  return (
    <div className="sidebar">
      <h2>ViChat</h2>
      <button onClick={toggleDark}>Toggle Dark Mode</button>
      <p>Contacts will be listed here</p>
    </div>
  );
}
