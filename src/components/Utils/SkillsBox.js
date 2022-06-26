import React, { useContext, memo } from "react";
import { Context } from "../../tools/context";
import { abilities, abilitesNameMapping } from "../../tools/constants";
import styles from "./SkillsBox.module.css";

const SkillsBox = memo((props) => {
  const { theme } = useContext(Context);

  const createSkillsBox = (skillsList, type, groupName) => {
    let iterationList = skillsList;
    let listTitle = "Skills Used : ";

    if (type == "abilities") {
      iterationList = abilities[groupName];
      listTitle = `${abilitesNameMapping[groupName]} :`;
    }

    if (iterationList != null) {
      let skillsIcon = iterationList.map((x) => (
        <li key={x.name}>
          <a
            className={styles[x.color + " " + theme]}
            rel="noopener noreferrer"
            href={x.link}
          >
            {x.name}
          </a>
        </li>
      ));

      let listCode = <ul>{skillsIcon}</ul>;
      let skillsListBox = (
        <div>
          <p>{listTitle}</p>
          {listCode}
        </div>
      );
      return skillsListBox;
    } else {
      return null;
    }
  };

  let mainBox = (
    <div className={styles.SkillsBox}>
      {createSkillsBox(props.skillsList, props.type, props.groupName)}
    </div>
  );
  return mainBox;
});
SkillsBox.type.displayName = "SKILLS BOX";
export default SkillsBox;
