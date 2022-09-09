import React from "react";
import {MyWork, ReproductionCoding} from './index';

const Artifact = (props) => {
  return(
    <section id="artifact" className="artifact">
      {/* セクション始まりの定型テキスト */}
      <div className="beginning">
        <h2 className="title">Artifact</h2>
        <p className="beginning-text container">こちらでは学習のアウトプットとして、作品と模写コーディングを行いました。模写コーディングに関しては模写を行ったURLを貼っておきますので是非参考にしてみてください。</p>
      </div>

      <MyWork artifactData={props.artifactData}/>
      <ReproductionCoding artifactData={props.artifactData}/>
    </section>
  );
}

export default Artifact;