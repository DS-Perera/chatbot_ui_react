import React from "react";
import ContentTitle from "../Components/ContentTitle";
import welcomeImg from "../images/welcome-image.png";

export default function Welcome() {
  return (
    <div>
      <ContentTitle title="Welcome to Chatbot Dashboard" />
      <div className="center">
        <img src={welcomeImg} alt="welcome asset" className="welcome-asset" />
      </div>
      <div style={{ width: "145%" }}>
        <p className="title01">Welcome to</p>
        <p className="title02">Chat-bot Dashboard</p>
      </div>
    </div>
  );
}
