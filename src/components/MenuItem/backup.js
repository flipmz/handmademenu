import React from "react";

import css from "./style.module.css";

// const test = props.tod.filter((element) => element.id.includes("0"));

const MenuItem = (props) => (
  <li>
    <a className={props.active ? css.active : null} href={props.link}>
      {props.children} {props.tod.name}
    </a>
  </li>
);

export default MenuItem;
