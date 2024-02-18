import React from "react";
import "./style.css";

const SignIn = ({ className }) => {
  return (
    <div className={`sign-in ${className}`}>
      <a className="text-wrapper">Sign in</a>
    </div>
  );
};

export default SignIn