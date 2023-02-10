import React, { useState } from "react";
import "./valentineHeart.css";

const ValentineCard = () => {
  const [animated, setAnimated] = useState(false);

  const handleClick = () => {
    setAnimated(!animated);
  };

  // console.log(text);

  return (
    <>
      <div className="heart-container" onClick={handleClick}>
        <div className={`heart ${animated ? "animated" : ""}`}>
          <div className="heart-top"></div>
          <div className="heart-bottom"></div>
        </div>
      </div>
    </>
  );
};

export default ValentineCard;
