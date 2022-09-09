import React from "react";

const MyWork = (props) => {

  // データをMapメソッドを利用して表示するための定義
  const artifact = props.artifactData.myWork.map(artifact => {
    return (
      <article className="art" key={artifact.id}>
        <p className="theme">【{artifact.name}】</p>
        <a href={artifact.access}>
          <img src={artifact.img} alt={artifact.name} />
          <p>作品に触れてみる</p>
        </a>

        <p className="point">【Point】</p>
        <p className="point-text">{artifact.point}</p>
      </article>
    );
  });

  return ( 
    <div className="my-work container">

      {/* サブタイトルの提携テキスト */}
      <p className="subtitle">---- My Work ----</p>

      {/* 呼び出し */}
      {artifact}
    </div>
  )
}

export default MyWork;