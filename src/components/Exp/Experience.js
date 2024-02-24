import React, { memo } from "react";
import ExperienceBlock from "./ExperienceBlock";
import {
  experienceShell,
  experienceMRM,
  experienceRMO,
  experienceRMO2,
  experienceTCFG,
  experiencePluang,
  experienceCuemath,
} from "../../tools/constants";
import styles from "../../App.module.css";

const WorkExperience = memo(() => {
  const workExperienceContent = [
    experienceCuemath,
    experiencePluang,
    experienceShell,
    experienceRMO,
    experienceRMO2,
  ];
  return workExperienceContent.map((x) => (
    <ExperienceBlock
      name={x.company}
      description={x.description}
      duration={x.timePeriod}
      skillsUsed={x.skillsUsed}
      link={x.companyLink}
      role={x.role}
      key={x.timePeriod}
    ></ExperienceBlock>
  ));
});
WorkExperience.type.displayName = "WORK_EXPERIENCE";

const CollegeExperience = memo(() => {
  const collegeExperienceContent = [experienceMRM, experienceTCFG];
  return collegeExperienceContent.map((x) => (
    <ExperienceBlock
      name={x.company}
      description={x.description}
      duration={x.timePeriod}
      skillsUsed={x.skillsUsed}
      link={x.companyLink}
      role={x.role}
      key={x.timePeriod}
    ></ExperienceBlock>
  ));
});
CollegeExperience.type.displayName = "COLLEGE_EXPERIENCE";

const Experience = memo(() => {
  return (
    <div className={styles.ContentArea}>
      <h2>Experience</h2>
      <div id="corporate">
        <WorkExperience />
      </div>
      <div id="school">
        <h2>College</h2>
        <div></div>
        <div>
          <CollegeExperience />
        </div>
      </div>
    </div>
  );
});
Experience.type.displayName = "EXPERIENCE";
export default Experience;
