import React from "react";
import chatBot from "../images/chatbot-icon.png";

export default function NavBar() {
  return (
    <div className="navbar-background">
      <img src={chatBot} alt="chat bot icon" className="navbar-icon"/>
    </div>
  );
}
