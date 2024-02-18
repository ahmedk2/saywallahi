
import React from "react";
import "./style.css";

const BookButton = ({ className }) => {
  return (
    <div className={`book-button ${className}`}>
      <div className="text-wrapper-6">Book Lesson</div>
    </div>
  );
};

export default BookButton