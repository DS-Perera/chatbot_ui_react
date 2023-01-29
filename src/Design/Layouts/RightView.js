import React from "react";
import { Routes, Route } from "react-router-dom";
import ChatBot from "./ChatBot";
import Welcome from "./Welcome";

export default function RightView() {
  return (
    <div className="content-view">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/chatbot" element={<ChatBot />} />
      </Routes>
    </div>
  );
}
