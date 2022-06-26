import React, { memo } from "react";
import styles from "./Navlink.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const Navlink = memo((props) => {
  const router = useRouter();

  let linkClassName = ``;
  if (router.pathname === `/${props.linkAddress}`)
    linkClassName += ` ${styles.activeLink}`;

  return (
    <div className={styles.Navlink}>
      <Link href={`/${props.linkAddress}`} key={props.linkText}>
        <a className={linkClassName}>{props.linkText}</a>
      </Link>
    </div>
  );
});

Navlink.type.displayName = "NAVLINK";

export default Navlink;
