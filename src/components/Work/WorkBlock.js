import Image from "next/image";
import React, { memo } from "react";
import styles from "./Work.module.css";
const WorkBlock = memo((props) => {
  let h3Tag = (
    <h3>
      <a href={props.link} rel="noopener noreferrer">
        {props.name}
      </a>
    </h3>
  );
  if (props.link == "") {
    h3Tag = <h3>{props.name}</h3>;
  }

  let imageLink = props.mockupImage;

  return (
    <div className={styles.WorkBlock}>
      {h3Tag}
      <div className={styles.WorkScreenShotsBox}>
        <Image
          src={imageLink}
          alt={props.mockupImageText}
          width={props.imgWidth}
          height={props.imgHeight}
          quality={25}
          priority
        ></Image>
      </div>
      <div className={styles.WorkDescription}>
        <p>{props.description}</p>
      </div>
    </div>
  );
});

WorkBlock.type.displayName = "WORK BLOCK";

export default WorkBlock;
