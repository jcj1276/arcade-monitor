import React from "react";
import Card from "../UI/Card";
import Icon from "../UI/Icon";

import styles from "./Core.module.css";

const Core = (props) => {
  return [
    <Card width={props.width}>
      <div className={styles["card-header"]}>
        <h4>Core Usage</h4>
        <Icon classes={["fa", "fa-desktop"]} />
      </div>
      <div className={styles["card-body"]}>{/* <Guage /> */}</div>
    </Card>,
  ];
};

export default Core;
