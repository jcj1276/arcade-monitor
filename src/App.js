import React, { Fragment } from "react";
import Header from "./components/Header";
import UpdateBar from "./components/UpdateBar";
import ActiveMachine from "./components/ActiveMachine/ActiveMachine";

import "./App.css";

function App() {
  return (
    <Fragment>
      <Header />
      <UpdateBar />
      <ActiveMachine />
    </Fragment>
  );
}

export default App;
