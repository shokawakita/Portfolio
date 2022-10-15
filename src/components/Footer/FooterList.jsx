import React from "react";
import {FormDialog} from '../Contact/index';

const FooterList = (props) => {
  
  // データをMapメソッドを利用して表示するための定義(menu-list)
  const menus = props.menuData.map(menu => {
    return (
      <ul key={menu.id}>
        <li><a href={`#${menu.click}`}>{menu.title}</a></li>
      </ul>
    )
  })

  // データをMapメソッドを利用して表示するための定義(SNS)
  const snsList = props.sns.map(value => {
    return (
      <ul key={value.id}>
        <li><a href={value.access}>
          <i className={value.class}></i>
        </a></li>
        <li><a href={value.access}>{value.name}</a></li>
      </ul>
    )
  })

  return (
    <div>
      <footer>
        <div className="container">
          <article className="portfolio">
            <h3 className="footer-title">Portfolio</h3>

            {/* 呼び出し */}
            {menus}

          </article>

          {/* 別のサイトの紹介 */}
          <article className="blog">
          <h3 className="footer-title">My Site</h3>
            <p><a target="_blank" href="#">My Blog</a></p>
            <p><a target="_blank" href="https://shokawakita.github.io/mysite/">Portfolio(過去のポートフォリオ)</a></p>
            <FormDialog/>
          </article>
        </div>
        <div className="fin container">

          {/* SNS欄呼び出し */}
          <div className="sns">{snsList}</div>
          
          <small>My Portfolio</small>
        </div>
      </footer>

      {/* 交差監視のためのdivタグ */}
      <div id="target">

        {/* ページトップに移動するための機能 */}
        <div id="to-top">
          <a href="#">
            <i className="bi bi-arrow-up-square"></i>
          </a>
        </div>
      </div>

    </div>
  )
}

export default FooterList;