import { Fragment, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import CounterAndClicks from "./components/CounterAndClicks";
import BasicCounter from "./components/BasicCounter";

function App() {
  return (
    <>
      <h2>Basic counter</h2>
      <div className="m-2">
        <BasicCounter />
      </div>

      <h2>Counter with clicks</h2>
      <div className="m-2">
        <CounterAndClicks initialValue={2} />
      </div>
    </>
  );
}

export default App;
