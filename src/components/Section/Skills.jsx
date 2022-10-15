import React from "react";
import {MainSkills, OtherSkills} from "./index"

const Skills = (props) => {
  return(
    <section id="skills" className="skills">

      {/* セクション始まりの定型テキスト */}
      <div className="beginning">
        <h2 className="title">Skills</h2>
        <p className="beginning-text container">
          こちらでは学習したものの習熟度と主要なスキルに関して,メインで使用しているスキルとその他学習したスキル別に分けて詳細をまとめまてみました。また、現在使用している環境についても記述してありますので御覧ください。
        </p>
      </div>

      <MainSkills mainSkillsData={props.mainSkillsData}/>
      <OtherSkills otherSkillsData={props.otherSkillsData}/>
    </section>
  );
}

export default Skills;