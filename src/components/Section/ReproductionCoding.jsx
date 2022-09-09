import React from "react";

const ReproductionCoding = (props) => {

  // データをMapメソッドを利用して表示するための定義
  const dotinstall = props.artifactData.reproductionCoding.dotinstall.map(value => {
    return (
      <article key={value.id}>
        <p>{value.theme}</p>
        <div>
          <span><i className="bi bi-reply-fill"></i></span>
          <a target="_blanck" href={value.default.true.access}>
            {value.default.true.name}
          </a>
        </div>
        <div>
          <span><i className="bi bi-reply-fill"></i></span>
          <a target="_blanck" href={value.default.false.access}>
            {value.default.false.name}
          </a>
        </div>
      </article>
    );
  });

  // データをMapメソッドを利用して表示するための定義
  const webSite = props.artifactData.reproductionCoding.webSite.map(value => {
    return (
      <article key={value.id}>
        <p>{value.theme}</p>
        <div>
          <span><i className="bi bi-reply-fill"></i></span>
          <a target="_blanck" href={value.default.true.access}>
            {value.default.true.name}
          </a>
        </div>
        <div>
          <span><i className="bi bi-reply-fill"></i></span>
          <a target="_blanck" href={value.default.false.access}>
            {value.default.false.name}
          </a>
        </div>
      </article>
    );
  });

  return ( 
    <div className="reproduction-coding container">

      {/* サブタイトルの提携テキスト */}
      <p className="subtitle">---- Reproduction Coding ----</p>

      <div className="coding">
        <p className="theme">【学習サイト「ドットインストール」】</p>

        {/* 呼び出し */}
        {dotinstall}

      </div>
      <div className="coding">
        <p className="theme">【WEBサイト「(模写コーディング)おすすめサイト】</p>

        {/* 呼び出し */}
        {webSite}

      </div>

      {/* 参考URL欄 */}
      <div className="coding">
        <div className="url">
          <p className="theme">【模写コーディング参考URL】</p>
          <a href="https://dotinstall.com/home">
            ・ドットインストール: (https://dotinstall.com/home)
          </a>
          <a href="https://code-step.com/coding-recommend/">
            ・【模写コーディング】　おすすめサイト: (https://code-step.com/coding-recommend/)
          </a>
        </div>
      </div>
    </div>
  )
}

export default ReproductionCoding;