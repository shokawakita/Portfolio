import React, {useState} from "react";

const MyWork = (props) => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const workConfig = (e) => {
    e.preventDefault();
    setOpen(!open)
  }

  const workConfig2 = (e) => {
    e.preventDefault();
    setOpen2(!open2);
  }

  // データをMapメソッドを利用して表示するための定義
  const artifact = props.artifactData.myWork.map(artifact => {
    return (
      <article className="art" key={artifact.id}>
        <p className="theme">【{artifact.name}】</p>
        <a target="_blank" href={artifact.access}>
          <img src={artifact.img} alt={artifact.name} />
          <p>作品に触れてみる</p>
        </a>

        <p className="point">【Point】</p>
        <p className="point-text">{artifact.point}</p>
        <a 
          onClick={(e) => workConfig(e)} 
          href="#"
          className="art-details"
          >作品の詳細</a>
        <a 
          onClick={(e) => workConfig2(e)}
          href="#"
          className="art-details"
          >stateの詳細(board)</a>
        <a href="https://github.com/shokawakita/Task-Manager-App" className="art-details">ソースコード</a>
        <div 
          className="work-details"
          style={{display: (open ? "block": "none")}}
          onClick={(e) => workConfig(e)}  
        >
          <span><i className="bi-bi-x-lg"></i></span>
          <img src='../../img/design1.png'/>
          <img src='../../img/design2.png'/>
        </div>
        <div
          className="work-details2"
          style={{display: (open2 ? "block": "none")}}
          onClick={(e) => workConfig2(e)}
        >
          <img src="../../img/boardState.png" id="image-style"/>
        </div>
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