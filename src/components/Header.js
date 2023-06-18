import React from "react";
import Timer from "./UI/Timer";

import styles from "./Header.module.css";

const Header = () => {
  return [
    <header>
      <h2>Arcade Server Status</h2>
      <Timer style={styles.time} />
    </header>,
  ];
};

export default Header;
