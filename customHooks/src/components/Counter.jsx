import useCounter from "./useCounter"

function Counter({initialValue=0}) {
   const {counter, onIncrement, onDecrement, onReset} = useCounter(initialValue)
  return (
    <div>
        <h2>Counter: {counter}</h2>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
        <button onClick={onReset}>Reset</button>
    </div>
  )
}

export default Counter