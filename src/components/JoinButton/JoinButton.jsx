import React from "react";
import "./style.css";

const JoinButton = ({ className, divClassName, rectangleClassName }) => {
  return (
    <button className={`join-button ${className}`}>
      <div className="overlap-group">
        <div className={`text-wrapper-5 ${divClassName}`}>Join</div>
        <div className={`rectangle ${rectangleClassName}`} />
      </div>
    </button>
  );
};

export default JoinButton
