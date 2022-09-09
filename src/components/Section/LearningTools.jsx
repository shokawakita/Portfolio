import React from "react";

const LearningTools = (props) => {

  // データをMapメソッドを利用して表示するための定義(インデックス)
  const toolsIndex = props.tools.map(tool => {
    return (
      <li key={tool.id}>
        <a onClick={() => 
        props.toggleAccordion(tool)} 
        href={`#${tool.click}`}>
          {tool.name}
        </a>
      </li>
    );
  });

  // データをMapメソッドを利用して表示するための定義(それぞれの詳細)
  const learningTools = props.tools.map(tool => {
    return (
      <div className="tools" key={tool.id} id={tool.click}>
          <p 
            onClick={() => props.toggleAccordion(tool)} 
            className="theme">
              【{tool.name}】
          </p>

        
        {/* アコーディオンの実装 */}
        <article className={tool.isOpen ? "appear" : ""}>
          <div>
            <h4>おすすめ度<span>{tool.evaluation}</span></h4>
            <h4>使用用途</h4>
            <p>{tool.usage}</p>  
          </div>
          <div>
            <h4>使用してみた所感</h4>
            <p>{tool.comment}</p>
          </div>
          <p>
            <a target="_blanck" href={tool.access}>
              <span><i className="bi bi-reply-fill"></i></span>
              サイトへ移動する</a>
          </p>
        </article>

      </div>
    )
  })

  return(
    <section id="learning-tools" className="learning-tools">
      {/* セクション始まりの定型テキスト */}
      <div className="beginning">
        <h2 className="title">Learning Tools</h2>
        <p className="beginning-text container">こちらでは学習や参考にしたサイトや使用したツールのご紹介を行っています。サイトのURLだけでなく、学習してみたサイトそれぞれの用途や、私個人のおすすめ度と所感も記述してありますので「プログラミングを学んでみたい!」と方は必要に応じてこちらも是非参考にしてみてください。</p>
      </div>

      
      <nav id="tool" className="index container">
        {/* サブタイトルの提携テキスト */}
        <p className="subtitle">----  Tools  ----</p>

        {/* 呼び出し */}
        <ul>{toolsIndex}</ul>
      </nav>

      <div className="tool container">
        {/* サブタイトルの提携テキスト */}
        <p className="subtitle">----  Review  ----</p>

        {/* 呼び出し */}
        {learningTools}
      </div>
      
    </section>
  );
}

export default LearningTools;