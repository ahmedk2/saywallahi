import React from "react";
import "./style.css";

export const Home = ({ className }) => {
  return (
    <div className={`home ${className}`}>
      <a className="text-wrapper-4" href="/">Home</a>
    </div>
  );
};


export default Home