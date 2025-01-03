import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0)

    const addCount = () => {
        const newCount = count+ 1;
        setCount(newCount)
    }
    const reduceCount = () => {
        const newCount = count- 1;
        setCount(newCount)
    }
    const resetCount = () => {
        const newCount = 0
        setCount(newCount)
    }
  return (
    <div>
        <h3>Counter: {count} </h3>
        <button onClick={addCount}>Add</button>
        <button onClick={resetCount}>Reset</button>
        <button onClick={reduceCount}>Reduce</button>
    </div>
  )
}
