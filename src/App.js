import React, { Fragment } from "react";
import Header from "./components/Header";
import ActiveMachine from "./components/ActiveMachine/ActiveMachine";

import "./App.css";

function App() {
  return (
    <Fragment>
      <Header />
      <ActiveMachine />
    </Fragment>
  );
}

export default App;
