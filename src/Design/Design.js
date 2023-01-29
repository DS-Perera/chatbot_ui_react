import React from "react";
import Copyright from "./Components/Copyright";
import NavBar from "./Components/NavBar";
import RightView from "./Layouts/RightView";

export default function Design() {
  return (
    <div>
      <div className="main-backround">
        <div className="window-backround">
          <NavBar />
          <RightView />
        </div>
      </div>
      <Copyright />
    </div>
  );
}
