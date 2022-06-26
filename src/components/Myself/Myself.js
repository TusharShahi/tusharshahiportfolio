import React, { memo } from "react";
import AbilitiesBox from "./AbilitiesBox";
import styles from "./Myself.module.css";
import appStyles from "../../App.module.css";

import {
  myDescription,
  myFreeTime,
  myBrag,
  myHobbies
} from "../../tools/constants";

const Myself = memo(() => {
  return (
    <div className={`${styles.Myself} ${appStyles.ContentArea}`}>
      <h2>Myself</h2>
      <div id="description">
        <p>{myDescription}</p>
      </div>
      <div id="javascriptBrag">
        <p>{myBrag}</p>
      </div>
      <div id="hobbies">
        <p>{myHobbies}</p>
      </div>
      <div id="freeTime">
        <p>{myFreeTime}</p>
      </div>

      <p id="resumeLink">
        <a rel="noopener noreferrer" href={"/Resume.pdf"} download>
          Download Resume &#11015;
        </a>
      </p>

      <AbilitiesBox></AbilitiesBox>
    </div>
  );
});

Myself.type.displayName = "MYSELF";
export default Myself;
