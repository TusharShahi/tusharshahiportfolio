import React, { memo } from "react";
import SkillsBox from "../Utils/SkillsBox";
import styles from "./Experience.module.css";

const ExperienceBlock = memo((props) => {
  let skillsUsed = props.skillsUsed;

  let detailsBlock = (
    <div>
      <h3>
        <a href={props.link} rel="noopener noreferrer" target="_blank">
          {props.name}
        </a>
      </h3>
      <h4>{props.duration}</h4>
      <div className={styles.DescriptionBox}>
        <p>{props.description}</p>
      </div>
    </div>
  );
  if (props.role != null) {
    detailsBlock = (
      <div>
        <h3>
          <a href={props.link} rel="noopener noreferrer" target="_blank">
            {props.role}
          </a>
        </h3>
        <h4>
          {props.name} / {props.duration}
        </h4>
        <div className={styles.DescriptionBox}>
          <p>{props.description}</p>
        </div>
      </div>
    );
  }

  let experienceBlock = null;
  let skillsBlock = null;

  if (skillsUsed == null) {
  } else {
    skillsBlock = <SkillsBox skillsList={skillsUsed}></SkillsBox>;
  }

  experienceBlock = (
    <div className={styles.ExperienceBlock}>
      {detailsBlock}
      {skillsBlock}
    </div>
  );

  return experienceBlock;
});

ExperienceBlock.type.displayName = "EXPERIENCEBLOCK";
export default ExperienceBlock;
