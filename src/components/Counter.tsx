import React from "react";
import { useState } from "react";

interface CounterProps {
  counterValue?: number;
}

const Counter = ({ counterValue = 0 }: CounterProps) => {
  const [counter, setCounter] = useState(counterValue);

  const handleIncrement = (): void => {
    setCounter((counter) => counter + counterValue);
  };

  const handleDecrement = (): void => {
    setCounter((counter) => counter - counterValue);
  };

  return (
    <div>
      <button onClick={handleIncrement} className="m-2">
        Increment
      </button>

      <button onClick={handleDecrement} className="m-2">
        Decrement
      </button>

      <span>{counter}</span>
    </div>
  );
};

export default Counter;
