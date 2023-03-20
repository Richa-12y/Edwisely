import React from "react";
import buttonStyle from "./button.module.css";

const Button = ({ text, icon, onClick }) => {
  return (
    <div className={buttonStyle["button"]} onClick={onClick}>
      <div className={buttonStyle["icon"]}>{icon}</div>
      <div>{text}</div>
    </div>
  );
};

export default Button;
