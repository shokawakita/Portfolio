import React from "react";

const MainSkills = (props) => {

  // データをMapメソッドを利用して表示するための定義
  const mainSkills = props.mainSkillsData.map(main => {
    return(
      <ul key={main.id}>
        <li>{main.category}</li>
        <li>{main.name1}</li>
        {main.name2 !== "" ? <li>{main.name2}</li> : ""}
      </ul>
    )
  })

  const mainSkillsDetails = props.mainSkillsData.map(main => {
    return (
      <li key={main.id}>
        <span>{main.name1}</span>
        <p>　{main.comment1}</p>
        <span>{main.name2}</span>
        <p>　{main.comment2}</p>
      </li>
    )
  })
  return(
    <div className="main-skills  container">

      {/* サブタイトルの提携テキスト */}
      <p className="subtitle">----  Main Skills  ----</p>

      <article>
        {/* 呼び出し */}
        {mainSkills}
      </article>

      <ul>{mainSkillsDetails}</ul>

    </div>
  );
}

export default MainSkills;