import { useState } from 'react'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 class="text-3xl font-bold underline bg-blue-200">
        Hello world!
      </h1>
      <Card username='Chai aur Code' btnText='Click Me'/>
      <Card />

    </>
  )
}

export default App
