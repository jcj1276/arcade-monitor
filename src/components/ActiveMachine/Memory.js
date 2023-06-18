import React from "react";
import Card from "../UI/Card";
import Icon from "../UI/Icon";

import styles from "./Memory.module.css";

const Memory = () => {
  return [
    <Card>
      <div className={styles["card-header"]}>
        <h4>Memory Statistics</h4>
        <Icon classes={["fa", "fa-database"]} />
      </div>
      <div className={styles["card-body"]}>{/* <Guage /> */}</div>
    </Card>,
  ];
};

export default Memory;
