import React from "react";
import Temperature from "./Temperature";
import Memory from "./Memory";
import Core from "./Core";

import styles from './ActiveMachine.module.css';

const ActiveMachine = () => {
  return [
    <section className={styles['active-machine']}>
      <Temperature width="quarter" />
      <Memory width="quarter" />
      <Core width="half" />
    </section>,
  ];
};

export default ActiveMachine;
