import React, { Fragment } from "react";

import styles from "./Guage.module.css";

const Guage = () => {
  return [
    <Fragment>
      <div>
        <div className="linguage-e"></div>
        <div className="position-relative">
          <div className="guage-prct">50%</div>
        </div>
        <div id="temp-chart-cnt">
          <canvas id="temp-chart"></canvas>
        </div>
      </div>
      <div className="col-5">
        <div className="latest-temp">Currently</div>
        <div className="temp"></div>
      </div>
    </Fragment>,
  ];
};

export default Guage;
