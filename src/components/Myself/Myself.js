import React, { memo } from "react";
import AbilitiesBox from "./AbilitiesBox";
import styles from "./Myself.module.css";
import appStyles from "../../App.module.css";

import { myDescription, myFreeTime, myHobbies } from "../../tools/constants";

const Myself = memo(() => {
  return (
    <div className={`${styles.Myself} ${appStyles.ContentArea}`}>
      <h2>Myself</h2>
      <div id="description">
        <p>{myDescription}</p>
      </div>
      <div id="hobbies">
        <p>{myHobbies}</p>
      </div>
      <div id="freeTime">
        <p>{myFreeTime}</p>
      </div>

      <p id="resumeLink">
        <a
          rel="noopener noreferrer"
          href="/TusharShahi_SoftwareEngineer.pdf"
          download
        >
          Download Resume &#x2193;
        </a>
      </p>
      <p id="blogLink">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://dev.to/tusharshahi"
        >
          Visit Blog &#x2197;
        </a>
      </p>

      <AbilitiesBox></AbilitiesBox>
    </div>
  );
});

Myself.type.displayName = "MYSELF";
export default Myself;
