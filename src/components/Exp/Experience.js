import React, { memo } from "react";
import ExperienceBlock from "./ExperienceBlock";
import {
  experienceShell,
  experienceMRM,
  experienceRMO,
  experienceRMO2,
  experienceTCFG,
  experiencePluang
} from "../../tools/constants";
import styles from "../../App.module.css";

const Experience = memo(() => {
  const createExperienceBlock = (contentArray) => {
    let experienceBlock = contentArray.map((x) => (
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

    return experienceBlock;
  };

  return (
    <div className={styles.ContentArea}>
      <h2>Experience</h2>
      <div id="corporate">
        {createExperienceBlock([
          experiencePluang,
          experienceShell,
          experienceRMO,
          experienceRMO2
        ])}
      </div>
      <div id="school">
        <h2>College</h2>
        <div></div>
        <div>{createExperienceBlock([experienceMRM, experienceTCFG])}</div>
      </div>
    </div>
  );
});
Experience.type.displayName = "EXPERIENCE";
export default Experience;
