import React from "react";

import Menu from "../components/Menu";

import css from "./style.module.css";

// import Menu from "../components/card-list";

const Toolbar = (props) => (
  <header className={css.Toolbar}>
    <Menu />
    <div></div>

    <nav>
      <Menu todos={this.state.todos} />
    </nav>
  </header>
);
export default Toolbar;
