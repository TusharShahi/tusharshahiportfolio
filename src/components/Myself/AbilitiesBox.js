import React from "react";
import SkillsBox from "../Utils/SkillsBox";
import styles from "./Myself.module.css";

const AbilitiesBox = () => {
  return (
    <div className={styles.AbilitiesBox}>
      <h2>Abilities</h2>
      <SkillsBox groupName="web" type="abilities"></SkillsBox>
      <SkillsBox groupName="database" type="abilities"></SkillsBox>
      <SkillsBox groupName="tools" type="abilities"></SkillsBox>
      {/*<SkillsBox groupName="core" type="abilities"></SkillsBox>*/}
    </div>
  );
};

AbilitiesBox.displayName = "ABILITIES BOX";
export default AbilitiesBox;
