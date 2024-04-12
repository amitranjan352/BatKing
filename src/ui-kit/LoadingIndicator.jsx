import React from "react";
import "./LoadingIndicator.css";
function LoadingIndicator() {
  return (
    <div className="loading-indicator">
      <div className="frame">
        <div className="big-circle"></div>
        <div className="up-down"></div>
        <div className="left-right"></div>
        <div className="inner-circle"></div>
      </div>
    </div>
  );
}

export default LoadingIndicator;
