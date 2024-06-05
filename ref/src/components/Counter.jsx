import { useState, useEffect } from "react";
import CounterDisplay from "./CounterDisplay";
import { useRef } from "react";

function Counter({ initialValue = 0, step = 1 }) {
  const [counter, setCounter] = useState(initialValue);
  const directionRef = useRef(null);
  const prevDirectionRef = useRef(null);

  function handleIncrement() {
    setCounter((c) => c + step);
  }
  function handleDecrement() {
    setCounter((c) => c - step);
  }

  function reset() {
    setCounter(initialValue);
  }

  useEffect(() => {
    if (counter > initialValue) {
      directionRef.current = "up";
    } else if (counter < initialValue) {
      directionRef.current = "down";
    } else {
      directionRef.current = null;
    }

    if (directionRef.current !== prevDirectionRef.current) {
      console.log(directionRef.current);
      prevDirectionRef.current = directionRef.current;
    }
  }, [counter, initialValue]);

  return (
    <>
      <CounterDisplay count={counter} />
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default Counter;
