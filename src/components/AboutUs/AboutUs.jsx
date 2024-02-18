import React from "react";
import "./style.css";

const AboutUs = ({ className }) => {
  return (
    <div className={`about-us ${className}`}>
      <a className="text-wrapper-3" href="/about">About Us</a>
    </div>
  );
};

export default AboutUs