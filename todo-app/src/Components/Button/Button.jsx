import React from "react";

const Button = ({ children }) => {
  return (
    <div className="button">
      <button className="btn">{children}</button>
    </div>
  );
};

export default Button;
