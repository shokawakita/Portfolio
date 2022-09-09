import React from "react";

const OtherSkills = (props) => {
  
  // データをMapメソッドを利用して表示するための定義
  const languages = props.otherSkillsData.languages.map(lang => {
    return (
      <li key={lang.id}>{lang.name}<span>{lang.evaluation}</span></li>
    )
  })

  // データをMapメソッドを利用して表示するための定義
  const tools = props.otherSkillsData.tools.map(tool => {
    return (
      <li key={tool.id}>
        {tool.name}<span>{tool.evaluation}</span>
      </li>
    )
  })
  
  return(
    <div className="other-skills  container">
      <div>
        {/* サブタイトルの提携テキスト */}
        <p className="subtitle">----  Other Skills  ----</p>

        <ul>
          <li>★★★・・・実践で利用したい水準まで学習を行いました</li>
          <li>★★☆・・・調べながらであれば利用することができる</li>
          <li>★☆☆・・・最低限の知識を理解している。</li>
        </ul>
      </div>

      <article>
        <p>【言語・フレームワーク】</p>

        {/* 呼び出し */}
        <ul>{languages}</ul>

      </article>
      <article>
        <p>【ツール】</p>

        {/* 呼び出し */}
        <ul>{tools}</ul>

      </article>
    </div>
  );
}

export default OtherSkills;