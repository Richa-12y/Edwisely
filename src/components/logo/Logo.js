import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./logo.module.css";
import { useMediaQuery, useMediaQueries } from "@react-hook/media-query";

const Logo = () => {
  const isMobile = useMediaQuery("only screen and (max-width: 321px)");
  const naviagete = useNavigate();
  const gotoHome = () => {
    naviagete("/");
  };
  return (
    <div className={style["sidebar_logo"]} onClick={gotoHome}>
      <span>{!isMobile ? "Edwisely" : "Ey"}</span>
    </div>
  );
};

export default Logo;
