import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(0);
  const increaseValue = () => {
    console.log("Value increased ", Math.random())
    setCounter(counter+1);
    console.log(counter)
  }
  const decreaseValue = () => {
    console.log("Value decreased ", Math.random())
    setCounter(counter-1);
    console.log(counter)

  }
  return (
    <>
    <h1>Counter App</h1>
    <h2>Current count value: {counter}</h2>
    <button
    onClick={increaseValue}
    >Increase value</button>
    <br />
    <button
    onClick={decreaseValue}
    >Decrease value</button>
    <h3>current value: {counter}</h3>
    </>
  )
}

export default App
