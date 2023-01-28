import React from "react";
import Copyright from "./Components/Copyright";
import NavBar from "./Components/NavBar";

export default function Design() {
  return (
    <div>
      <div className="main-backround">
        <div className="window-backround">
          <NavBar />
        </div>
      </div>
      <Copyright />
    </div>
  );
}
