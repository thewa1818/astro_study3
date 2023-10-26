import { useState } from "react";
const ListItems = ["アイテムA", "アイテムB", "アイテムC", "アイテムD"];
import "../Link/Header.scss";
import { Link, animateScroll as scroll } from "react-scroll";

const Scroll = () => {
  return (
    <>
      <Link to="section1">
        <div class="header__wrapper">
          <h3 class="header__wrapper-title">スタディサプリ</h3>
          <ul class="header__wrapper-list">
            {ListItems.map((item) => (
              <li class="header__wrapper-list-item">{item}</li>
            ))}
          </ul>
        </div>
      </Link>
    </>
  );
};

export default Scroll;
