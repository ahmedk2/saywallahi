import React from "react";
import "./style.css";

const AskAyeeo = ({ className }) => {
  return (
    <div className={`ask-ayeeo ${className}`}>
      <a className="div" href="/ask">Ask Ayeeo</a>
    </div>
  );
};

export default AskAyeeo