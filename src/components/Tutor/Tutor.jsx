import React from "react";
import "./style.css";

export const Tutor = ({ className }) => {
  return (
    <div className={`tutor ${className}`}>
      <a className="text-wrapper-2" href="/tutor">Tutor</a>
    </div>
  );
};


export default Tutor