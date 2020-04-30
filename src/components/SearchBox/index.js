import React from "react";
import css from "./style.module.css";
const SearchBox = (props) => (
  <div className={css.SearchBox}>
    <input type="search" placeholder="хайлт" />
  </div>
);

export default SearchBox;
