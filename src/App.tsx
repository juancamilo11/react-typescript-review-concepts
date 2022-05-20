import { Fragment, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <Counter initialValue={2} />
      <Counter initialValue={5} />
      <Counter initialValue={10} />
    </>
  );
}

export default App;
