import React, { memo } from "react";
import Navbar from "./Navbar";
import ModeToggler from "./ModeToggler";
import styles from "./Header.module.css";

const Header = memo(() => {
  return (
    <div className={styles.Header}>
      <ModeToggler></ModeToggler>
      <Navbar></Navbar>
    </div>
  );
});

Header.type.displayName = "HEADER";
export default Header;
