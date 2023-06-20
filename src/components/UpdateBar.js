import React, { useState, useEffect, useCallback } from "react";

import styles from "./UpdateBar.module.css";

const UpdateBar = () => {
  const [refresh, setRefresh] = useState(30);
  const [hardRefresh, setHardRefresh] = useState(40);

  const setTimer = useCallback((i) => {
    setTimeout(() => {
      setRefresh(i - 1);
      i === 1 && setHardRefresh(hardRefresh - 1);
      hardRefresh === 0 && window.location.reload();
    }, 1000);
  }, [hardRefresh]);

  useEffect(() => {
    setTimer(refresh > 0 ? refresh : 30);
  }, [refresh, setTimer]);

  return [
    <div className={styles["update-bar"]}>
      <span className={styles["active-machine"]}>Test</span>
      <div>
        <span className={styles["soft-refresh"]}>
          <span>Refresh:</span> <span>{refresh}</span> <span>second(s)</span>
        </span>
        <span>( Hard Refresh: {Math.ceil(hardRefresh / 2)} Minutes )</span>
      </div>
    </div>,
  ];
};

export default UpdateBar;
