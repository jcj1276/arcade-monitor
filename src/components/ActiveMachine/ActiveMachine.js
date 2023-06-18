import React from "react";
import Temperature from "./Temperature";
import Memory from "./Memory";

import styles from './ActiveMachine.module.css';

const ActiveMachine = () => {
  return [
    <section className={styles['active-machine']}>
      <Temperature width="quarter" />
      <Memory width="quarter" />
    </section>,
  ];
};

export default ActiveMachine;
