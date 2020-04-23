import React from "react";

import css from "./style.module.css";

const SubMenuItem = (props) => (
  <li>
    <a className={props.active ? css.active : null} href={props.link}>
      {props.tod.name}
    </a>
  </li>
);

export default SubMenuItem;

// const test = props.tod.filter((element) => element.id.includes("0"));

{
  /* {props.tod.map((element) => (
        <div>{props.tod.filter((element) => "isactive" === true)}</div>
      ))} */
}
