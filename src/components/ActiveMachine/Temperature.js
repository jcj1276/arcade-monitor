import React from "react";
import Card from "../UI/Card";
import Icon from "../UI/Icon";
import Guage from "../Charts/Guage";

import styles from "./Temperature.module.css";

const Temperature = (props) => {
  return [
    <Card width={props.width}>
      <div className={styles["card-header"]}>
        <h4>CPU Temperature</h4>
        <Icon classes={['fa', 'fa-thermometer-three-quarters']} />
      </div>
      <div className={styles["card-body"]}>
        {/* <Guage /> */}
      </div>
    </Card>,
  ];
};

export default Temperature;
