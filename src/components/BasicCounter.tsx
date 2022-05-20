import React from "react";
import { useState } from "react";

interface CounterProps {
  initialValue?: number;
}

const BasicCounter = ({ initialValue = 0 }: CounterProps) => {
  const [counter, setCounter] = useState<number>(initialValue);

  const handleIncrement = (increment: number): void => {
    setCounter((value) => value + increment);
  };

  const handleDecrement = (decrement: number): void => {
    setCounter((value) => value - decrement);
  };

  return (
    <div>
      <button
        onClick={(e) => handleIncrement(5)}
        className="m-2 btn btn-primary"
      >
        Increment
      </button>

      <button
        onClick={(e) => handleDecrement(5)}
        className="m-2 btn btn-primary"
      >
        Decrement
      </button>

      <p>Valor actual: {counter}</p>
    </div>
  );
};

export default BasicCounter;
