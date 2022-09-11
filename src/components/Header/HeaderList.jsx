import React from "react";
import {Menu} from './index';
import {FormDialog} from '../Contact/index';

const HeaderList = (props) => {
  
  // データをMapメソッドを利用して表示するための定義
  const menus = props.menuData.map(menu => {
    return (
        <li key={menu.id}>
          <a href={`#${menu.click}`}>{menu.title}</a>
        </li>
    );
  });

  return (
    <header>
      <h1><a href="#">My Portfolio</a></h1>
      <Menu 
        isCheck={props.isCheck} 
        toggleCheck={props.toggleCheck} 
        menuData={props.menuData}/>
    
      {/* 1100px以上の場合のヘッダーデザイン */}
      <nav className="window-screen-header">
        <ul>
          {menus}
          <li><FormDialog /></li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderList;