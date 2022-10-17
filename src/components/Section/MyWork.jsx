import React, {useState} from "react";

const MyWork = (props) => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(props.artifactData.myWork)

  console.log(data)

  const workConfig = (e, index) => {
    e.preventDefault();
    const pos = props.artifactData.myWork.map(data => {
      return data.id
    }).indexOf(index.id)
    
    const newData = data.map((list, index) => {
      return {
        id: list.id,
        img: list.img,
        access: list.access,
        name: list.name,
        point: list.point,
        source: list.source,
        isOpen: (index === pos ? !list.isOpen: false),
        design: list.design,
      }
    })

    setData(newData);
  }

  const showState = (e) => {
    e.preventDefault();
    setOpen(!open);
  }

  // データをMapメソッドを利用して表示するための定義
  const artifact = data.map(artifact => {
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
          onClick={(e) => workConfig(e, artifact)} 
          href="#"
          className="art-details"
          >作品の詳細</a>

        {/* Task Manager　Appのみの表示 */}
        <a 
        style={{display: (artifact.id === 2 ? "block" : "none")}}
          onClick={(e) => showState(e)}
          href="#"  
          className="art-details"
          >stateの詳細(board)</a>

        <div 
          className="work-details"
          style={{display: (artifact.isOpen ? "block": "none")}}
          onClick={(e) => workConfig(e, artifact)}  
        >
          {artifact.design.map((list, index) => {
            return (
              <img key={index} src={list} />
            )
          })}

        </div>
        {/* Task Manager　Appのみの表示 */}
        <div
          className="work-details2"
          style={{display: (open ? "block": "none")}}
          onClick={(e) => showState(e)}
        >
          <img src="../../img/boardState.png" id="image-style"/>
        </div>
        <a 
          href={artifact.source}
          className="art-details"
          target="_blank"  
        >ソースコード</a>
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