import React from "react";
import {Artifact, Skills, Profile, LearningTools} from "./index.js";

const SectionList = (props) => {
  
  return(
    <main>
      <Profile />
      <Skills 
        mainSkillsData={props.mainSkillsData} 
        otherSkillsData={props.otherSkillsData}
      />
      <Artifact artifactData={props.artifactData}/>
      <LearningTools 
        learningTools={props.learningTools}
        toggleAccordion={props.toggleAccordion}
        tools={props.tools}
        />
    </main>
  );
}

export default SectionList;