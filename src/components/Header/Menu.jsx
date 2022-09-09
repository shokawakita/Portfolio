import React from "react";
import {FormDialog} from '../Contact/index';


const Menu = (props) => {

  // データをMapメソッドを利用して表示するための定義
  const menus = props.menuData.map(menu => {
    return (
        <li 
          key={menu.id} 
          onClick={props.toggleCheck}
        >
          <a href={`#${menu.click}`}>{menu.title}</a>
        </li>
    );
  });

  return (
    <div className="menu">
      {/* ハンバーガーメニューのためのタグ */}
      <div onClick={props.toggleCheck}>
        <span className={props.isCheck ? "close" : ""}></span>
        <span className={props.isCheck ? "close" : ""}></span>
        <span className={props.isCheck ? "close" : ""}></span>
      </div>

    {/* メニューリスト */}
      <nav className={props.isCheck ? "menu-list appear" : "menu-list"}>
        <ul>
          {menus}
          <FormDialog />
        </ul>
      </nav>
    </div>
  )
}

export default Menu;