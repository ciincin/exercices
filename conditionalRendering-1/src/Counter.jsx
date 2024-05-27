import { useState , useEffect} from 'react'
import CounterDisplay from './CounterDisplay'

export function Counter({ initialValue = 0, step = 1 }) {
	// const [counter, setCounter] = useState(initialValue)

	const [counter, setCounter] = useState(initialValue)

	function handleIncrement() {
		setCounter((currentValue) => currentValue + step)
	}

	function handleDecrement() {
		setCounter((currentValue) => currentValue - step)
	}

	function reset(){
		setCounter(initialValue)
	}

	useEffect(()=>{
		console.log(`Current value of Counter: ${counter}`);
	}, [counter])


	return (
		<div>
			<CounterDisplay count={counter}/>
			<button onClick={handleIncrement}>Increment</button>
			<button onClick={handleDecrement}>Decrement</button>
			<button onClick={reset}>Reset</button>
		</div>
	)
}


// An **immediate value** when the next state does NOT depend on the previous state.
// A **function** when the next state depends on the previous state.