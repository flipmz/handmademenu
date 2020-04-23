import React from "react";
import css from "./style.module.css";
import SubMenuItem from "../SubMenuItem";

const Menu = (props) => (
  <div>
    <ul className={css.Menu}>
      {props.CardProb.map((element) => (
        <div>
          <SubMenuItem
            key={element.name}
            tod={element}
            active
            link="/checkout"
          ></SubMenuItem>
        </div>
      ))}
    </ul>
  </div>
);

export default Menu;
