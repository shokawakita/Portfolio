import React, {useState, useEffect, useCallback} from "react";
// import { useInView } from "react-intersection-observer";
import {HeaderList, HeroArea} from './components/Header/index.js';
import {SectionList} from './components/Section/index.js';
import {FooterList} from './components/Footer/index.js';
import {default as data} from './dataset.js';

const App = () => {
  // ハンバーガーメニューの切り替えのためのスイッチ
  const [isCheck, setIsCheck] = useState(false);

  // Learning Toolsのアコーディオンの切り替えのためのデータ保存
  const [tools, setTools] = useState(data.learningTools);

  // // Intersection Observer　API　の利用
  // const { ref, inView } = useInView({
  //   // オプション
  //   rootMargin: '-50px', // ref要素が現れてから50px過ぎたら
  //   triggerOnce: true, // 最初の一度だけ実行
  // });

  // ハンバーガーメニューの切り替えのための関数
  const toggleCheck = () => {
    setIsCheck(!isCheck);
  }


  // Intersection Observerのための参考コード------
  // const { ref, inView } = useInView({
  //   // オプション
  //   rootMargin: '-50px', // ref要素が現れてから50px過ぎたら
  //   triggerOnce: true, // 最初の一度だけ実行
  // });

  // <div ref={ref} style={{ height: '300px' }}>
  //       {inView && (
  //         <div
  //           className="animate__animated animate__fadeInUp"
  //           style={{ backgroundColor: 'yellow' }}
  //         >
  //           <p>黄色の要素が出現！</p>
  //         </div>
  //       )}
  // </div>
  // ここまで------------------------------------
  

  // Learning Toolsのアコーディオン切り替えのための関数
  const toggleAccordion = (tool) => {
    const newTools = data.learningTools.map(tool => {
      return({id: tool.id, isOpen: tool.isOpen, name: tool.name, type: tool.type, access: tool.access, usage: tool.usage, comment: tool.comment, click: tool.click, evaluation: tool.evaluation})
    });
    newTools[tool.id - 1].isOpen = !newTools[tool.id - 1].isOpen
    setTools(newTools);
  }
  
  return (
    <div>
      <HeaderList 
        isCheck={isCheck}
        toggleCheck={toggleCheck} 
        menuData={data.menuData}
      />
      <HeroArea 
        heroImage={data.menuData}
        />
      <SectionList 
        mainSkillsData={data.mainSkillsData} 
        otherSkillsData={data.otherSkillsData}
        artifactData={data.artifactData}
        tools={tools}
        toggleAccordion={toggleAccordion}
      />
      <FooterList 
        menuData={data.menuData}
        sns={data.sns}
        />
    </div>
  );
}

export default App;