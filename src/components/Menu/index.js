import React from "react";
import css from "./style.module.css";
import MenuItem from "../MenuItem";
// import * as ReactBootStrap from "react-bootstrap";

const Menu = (props) => (
  <div>
    <ul className={css.Menu}>
      {/* <MenuItem active link="/home">
        НҮҮР
      </MenuItem> */}
      <div class={css.dropdown}>
        <MenuItem className={css.dropbtn}> {props.onSearch}</MenuItem>
        <div className={css.dropdownContent}>
          <a href="#">ТЕРРОРИЗМТОЙ ТЭМЦЭХ ЗӨВЛӨЛ</a>
          <a href="#">ТЕРРОРИЗМТО ТЭМЦЭХ ЗӨВЛӨЛИЙН АЖЛЫН АЛБА</a>
          {/* <a href="#">Link 3</a> */}
        </div>
      </div>

      <div class={css.dropdown}>
        <MenuItem className={css.dropbtn}> ХУУЛЬ ЭРХ ЗҮЙ</MenuItem>
        <div className={css.dropdownContent}>
          <a href="#">НЭГДЭН ОРСОН ОУ-ЫН ГЭРЭЭ</a>
          <a href="#">ХОЁР ТАЛЫН ГЭРЭЭ ХЭЛЭЛЦЭЭР</a>
          <a href="#">ХУУЛЬ</a>
          <a href="#">ДҮРЭМ</a>
          <a href="#">ЖУРАМ</a>
          <a href="#">ГАРЫН АВЛАГА</a>
        </div>
      </div>
      <div class={css.dropdown}>
        <MenuItem className={css.dropbtn}> МЭДЭЭ МЭДЭЭЛЭЛ</MenuItem>
        <div className={css.dropdownContent}>
          <a href="#">ГАДААД ДОТООД МЭДЭЭ</a>
          <a href="#">СУРГАЛТ ДАДЛАГА</a>
          <a href="#">ДҮРС БИЧЛЭГ</a>
        </div>
      </div>
      <div class={css.dropdown}>
        <MenuItem className={css.dropbtn}>ДҮН ШИНЖИЛГЭЭ</MenuItem>
        <div className={css.dropdownContent}>
          {/* <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a> */}
        </div>
      </div>
      <div class={css.dropdown}>
        <MenuItem className={css.dropbtn}>ТЕРРОРИЗМЫН НӨХЦӨЛ БАЙДАЛ</MenuItem>
        <div className={css.dropdownContent}>
          <a href="#">МУ-ЫН ТЕРРОРИЗМИЙН НӨХЦӨЛ БАЙДАЛ</a>
          <a href="#">МУ МУТС, ЗДС ЭРСДЛИЙН ҮНЭЛГЭЭ</a>
          {/* <a href="#">Link 3</a> */}
        </div>
      </div>
      <div class={css.dropdown}>
        <MenuItem className={css.dropbtn}>ХОРИГ АРГА ХЭМЖЭЭ</MenuItem>
        <div className={css.dropdownContent}>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
      <div class={css.dropdown}>
        <MenuItem className={css.dropbtn}>САЛБАР ЗӨВЛӨЛ</MenuItem>
        <div className={css.dropdownContent}>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
      <div class={css.dropdown}>
        <MenuItem className={css.dropbtn}>ХОЛБОО БАРИХ</MenuItem>
        <div className={css.dropdownContent}>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
    </ul>
  </div>
);

export default Menu;

// {props.CardProb.map((element) => (

//   ))}

{
  /* <DropdownItem tag={Link} to="/me">
        text here
      </DropdownItem> */
}
