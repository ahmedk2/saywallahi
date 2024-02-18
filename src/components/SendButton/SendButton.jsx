import React from "react";
import "./style.css";

const SendButton = ({ className }) => {
  return (
    <div className={`send-button ${className}`}>
      <div className="text-wrapper-7">Send Message</div>
    </div>
  );
};

export default SendButton