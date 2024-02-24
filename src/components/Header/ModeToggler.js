import React, { useRef, useContext, memo } from "react";
import { Context } from "../../tools/context";
import styles from "./Header.module.css";

const ModeToggler = memo(() => {
  const { theme, toggleTheme } = useContext(Context);

  const buttonRef = useRef();

  const keyDown = (e) => {
    if (e.keyCode == "13" || e.keyCode == "32") {
      buttonRef.current.click();
    }
  };

  let emojiSpan =
    (theme === undefined ? "light" : theme).toUpperCase() === "DARK" ? (
      <span role="img" aria-hidden="true">
        &#127771;
      </span>
    ) : (
      <span role="img" aria-hidden="true">
        &#127774;
      </span>
    );
  return (
    <div
      className={styles.modeChangeButton}
      ref={buttonRef}
      role="button"
      tabIndex="0"
      onClick={toggleTheme}
      onKeyDown={keyDown}
    >
      {(theme === undefined ? "light" : theme).toUpperCase()} {emojiSpan}
    </div>
  );
});

ModeToggler.type.displayName = "MODE TOGGLER";
export default ModeToggler;
