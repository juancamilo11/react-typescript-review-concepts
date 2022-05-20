import React from "react";
import { useState } from "react";

interface CounterProps {
  initialValue?: number;
}

interface CounterAndTimesProps {
  value: number;
  clicks: number;
}

const Counter = ({ initialValue = 0 }: CounterProps) => {
  const [counter, setCounter] = useState<CounterAndTimesProps>({
    value: initialValue,
    clicks: 0,
  });

  const handleIncrement = (increment: number): void => {
    setCounter(({ value, clicks }) => ({
      value: value + increment,
      clicks: clicks + 1,
    }));
  };

  const handleDecrement = (decrement: number): void => {
    setCounter(({ value, clicks }) => ({
      value: value + decrement,
      clicks: clicks + 1,
    }));
  };

  return (
    <div>
      <button onClick={(e) => handleIncrement(5)} className="m-2">
        Increment
      </button>

      <button onClick={(e) => handleDecrement(5)} className="m-2">
        Decrement
      </button>

      <p>Valor actual: {counter.value}</p>
      <p>Cantidad de clicks: {counter.clicks}</p>
    </div>
  );
};

export default Counter;
