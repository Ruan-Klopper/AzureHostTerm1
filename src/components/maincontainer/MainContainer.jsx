import React from "react";
import "./MainContainer.css";

function MainContainer({ children }) {
  return (
    <div className="mainContainer">
      <div className="Statistics"></div>
      <div className="centre">{children}</div>
    </div>
  );
}

export default MainContainer;
