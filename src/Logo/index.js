import React from "react";
import css from "./style.module.css";
import LogoImage from "../Assets/Images/download.jpeg";
const Logo = () => (
  <div className={css.Logo}>
    <img src={LogoImage} />
    <div className={css.Devide}>
      <p>TЕРРОРИЗМТОЙ ТЭМЦЭХ</p>
      <p1> ЗӨВЛӨЛ </p1>
    </div>

    <div className={css.ln}></div>
    <p>АЖЛЫН АЛБА</p>
  </div>
);

export default Logo;
