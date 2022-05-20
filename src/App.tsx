import { Fragment, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <Counter counterValue={2} />
      <Counter counterValue={5} />
      <Counter counterValue={10} />
    </>
  );
}

export default App;
