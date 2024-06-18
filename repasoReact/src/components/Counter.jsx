import { useEffect, useState } from "react";
import CounterDisplay from "./CounterDisplay";

function Counter({ initialValue= 0, step=1 }) {
  const [count, setCount] = useState(initialValue)

  function handleIncreaseAmount() {
    setCount((c) => c + step);
  }

  function handleDecreaseAmount() {
    setCount((c) => c - step);
  }

  function handleReset() {
    setCount(initialValue);
  }

  useEffect(()=>{console.log(count);}, [count])

  return (
    <div>
      <CounterDisplay value={count}/>
      <button onClick={handleIncreaseAmount}>Increase</button>
      <button onClick={handleDecreaseAmount}>Decrease</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Counter;
