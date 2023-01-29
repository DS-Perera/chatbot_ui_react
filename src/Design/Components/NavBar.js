import React from "react";
import { Link } from "react-router-dom";
import chatBot from "../images/chatbot-icon.png";

export default function NavBar() {
  return (
    <div className="navbar-background">
      <Link to="chatbot">
        <img src={chatBot} alt="chat bot icon" className="navbar-icon" />
      </Link>
    </div>
  );
}
